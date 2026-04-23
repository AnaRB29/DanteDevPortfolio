#!/usr/bin/env python3
"""
Backend API Testing for Alfonso Martín Portfolio
Tests all contact API endpoints and existing status endpoints
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Base URL from frontend environment
BASE_URL = "https://raccoon-games-hub.preview.emergentagent.com/api"

def test_get_root():
    """Test GET /api/ endpoint"""
    print("\n=== Testing GET /api/ ===")
    try:
        response = requests.get(f"{BASE_URL}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data:
                print("✅ GET /api/ - SUCCESS: Returns 200 with message field")
                return True
            else:
                print("❌ GET /api/ - FAILED: Missing 'message' field in response")
                return False
        else:
            print(f"❌ GET /api/ - FAILED: Expected 200, got {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ GET /api/ - ERROR: {e}")
        return False

def test_status_endpoints():
    """Test POST /api/status and GET /api/status round-trip"""
    print("\n=== Testing Status Endpoints Round-trip ===")
    
    # Test POST /api/status
    print("\n--- Testing POST /api/status ---")
    test_client_name = f"test_client_{uuid.uuid4().hex[:8]}"
    payload = {"client_name": test_client_name}
    
    try:
        response = requests.post(f"{BASE_URL}/status", json=payload)
        print(f"POST Status Code: {response.status_code}")
        print(f"POST Response: {response.json()}")
        
        if response.status_code != 200:
            print(f"❌ POST /api/status - FAILED: Expected 200, got {response.status_code}")
            return False
            
        post_data = response.json()
        if "id" not in post_data or "client_name" not in post_data:
            print("❌ POST /api/status - FAILED: Missing required fields in response")
            return False
            
        created_id = post_data["id"]
        print(f"✅ POST /api/status - SUCCESS: Created status with ID {created_id}")
        
    except Exception as e:
        print(f"❌ POST /api/status - ERROR: {e}")
        return False
    
    # Test GET /api/status
    print("\n--- Testing GET /api/status ---")
    try:
        response = requests.get(f"{BASE_URL}/status")
        print(f"GET Status Code: {response.status_code}")
        
        if response.status_code != 200:
            print(f"❌ GET /api/status - FAILED: Expected 200, got {response.status_code}")
            return False
            
        get_data = response.json()
        print(f"GET Response: Found {len(get_data)} status records")
        
        # Check if our created record is in the list
        found_record = False
        for record in get_data:
            if record.get("id") == created_id:
                found_record = True
                print(f"✅ Found our created record: {record}")
                break
                
        if found_record:
            print("✅ GET /api/status - SUCCESS: Round-trip working correctly")
            return True
        else:
            print("❌ GET /api/status - FAILED: Created record not found in list")
            return False
            
    except Exception as e:
        print(f"❌ GET /api/status - ERROR: {e}")
        return False

def test_contact_post_valid():
    """Test POST /api/contact with valid data"""
    print("\n=== Testing POST /api/contact with Valid Data ===")
    
    payload = {
        "name": "Alfonso Test",
        "email": "alfonso.test@example.com",
        "subject": "Test Contact Message",
        "message": "This is a test message from the backend testing suite."
    }
    
    try:
        response = requests.post(f"{BASE_URL}/contact", json=payload)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["id", "received_at", "message"]
            
            if all(field in data for field in required_fields):
                if data["message"] == "ok":
                    print("✅ POST /api/contact (valid) - SUCCESS: Returns 200 with correct response structure")
                    return True, data["id"]
                else:
                    print(f"❌ POST /api/contact (valid) - FAILED: Expected message='ok', got '{data['message']}'")
                    return False, None
            else:
                missing = [f for f in required_fields if f not in data]
                print(f"❌ POST /api/contact (valid) - FAILED: Missing fields: {missing}")
                return False, None
        else:
            print(f"❌ POST /api/contact (valid) - FAILED: Expected 200, got {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ POST /api/contact (valid) - ERROR: {e}")
        return False, None

def test_contact_post_invalid_email():
    """Test POST /api/contact with invalid email"""
    print("\n=== Testing POST /api/contact with Invalid Email ===")
    
    payload = {
        "name": "Test User",
        "email": "invalid-email-format",
        "message": "Test message"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/contact", json=payload)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✅ POST /api/contact (invalid email) - SUCCESS: Returns 422 for invalid email")
            return True
        else:
            print(f"❌ POST /api/contact (invalid email) - FAILED: Expected 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ POST /api/contact (invalid email) - ERROR: {e}")
        return False

def test_contact_post_missing_fields():
    """Test POST /api/contact with missing required fields"""
    print("\n=== Testing POST /api/contact with Missing Required Fields ===")
    
    # Test missing name
    print("\n--- Testing missing 'name' field ---")
    payload_no_name = {
        "email": "test@example.com",
        "message": "Test message"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/contact", json=payload_no_name)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 422:
            print(f"❌ POST /api/contact (missing name) - FAILED: Expected 422, got {response.status_code}")
            return False
        else:
            print("✅ POST /api/contact (missing name) - SUCCESS: Returns 422")
            
    except Exception as e:
        print(f"❌ POST /api/contact (missing name) - ERROR: {e}")
        return False
    
    # Test missing message
    print("\n--- Testing missing 'message' field ---")
    payload_no_message = {
        "name": "Test User",
        "email": "test@example.com"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/contact", json=payload_no_message)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code != 422:
            print(f"❌ POST /api/contact (missing message) - FAILED: Expected 422, got {response.status_code}")
            return False
        else:
            print("✅ POST /api/contact (missing message) - SUCCESS: Returns 422")
            return True
            
    except Exception as e:
        print(f"❌ POST /api/contact (missing message) - ERROR: {e}")
        return False

def test_contact_post_long_message():
    """Test POST /api/contact with message longer than 2000 characters"""
    print("\n=== Testing POST /api/contact with Long Message (>2000 chars) ===")
    
    long_message = "A" * 2001  # 2001 characters
    payload = {
        "name": "Test User",
        "email": "test@example.com",
        "message": long_message
    }
    
    try:
        response = requests.post(f"{BASE_URL}/contact", json=payload)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✅ POST /api/contact (long message) - SUCCESS: Returns 422 for message >2000 chars")
            return True
        else:
            print(f"❌ POST /api/contact (long message) - FAILED: Expected 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ POST /api/contact (long message) - ERROR: {e}")
        return False

def test_contact_get(expected_message_id=None):
    """Test GET /api/contact endpoint"""
    print("\n=== Testing GET /api/contact ===")
    
    try:
        response = requests.get(f"{BASE_URL}/contact")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code != 200:
            print(f"❌ GET /api/contact - FAILED: Expected 200, got {response.status_code}")
            return False
            
        data = response.json()
        print(f"Response: Found {len(data)} contact messages")
        
        if not isinstance(data, list):
            print("❌ GET /api/contact - FAILED: Response is not a list")
            return False
            
        # Check if messages are sorted by received_at (newest first)
        if len(data) > 1:
            timestamps = [msg.get("received_at") for msg in data if "received_at" in msg]
            if len(timestamps) > 1:
                # Check if sorted in descending order (newest first)
                is_sorted = all(timestamps[i] >= timestamps[i+1] for i in range(len(timestamps)-1))
                if is_sorted:
                    print("✅ Messages are sorted newest first")
                else:
                    print("❌ Messages are NOT sorted newest first")
                    return False
        
        # If we have an expected message ID, check if it's in the list
        if expected_message_id:
            found_message = False
            for msg in data:
                if msg.get("id") == expected_message_id:
                    found_message = True
                    print(f"✅ Found our created message: {msg}")
                    break
                    
            if not found_message:
                print(f"❌ GET /api/contact - FAILED: Expected message ID {expected_message_id} not found")
                return False
        
        print("✅ GET /api/contact - SUCCESS: Returns list of messages, sorted newest first")
        return True
        
    except Exception as e:
        print(f"❌ GET /api/contact - ERROR: {e}")
        return False

def main():
    """Run all backend API tests"""
    print("🚀 Starting Backend API Tests for Alfonso Martín Portfolio")
    print(f"Base URL: {BASE_URL}")
    
    results = []
    created_message_id = None
    
    # Test 1: GET /api/ (root endpoint)
    results.append(("GET /api/", test_get_root()))
    
    # Test 2: Status endpoints round-trip
    results.append(("Status Round-trip", test_status_endpoints()))
    
    # Test 3: POST /api/contact with valid data
    success, message_id = test_contact_post_valid()
    results.append(("POST /api/contact (valid)", success))
    if success:
        created_message_id = message_id
    
    # Test 4: POST /api/contact with invalid email
    results.append(("POST /api/contact (invalid email)", test_contact_post_invalid_email()))
    
    # Test 5: POST /api/contact with missing fields
    results.append(("POST /api/contact (missing fields)", test_contact_post_missing_fields()))
    
    # Test 6: POST /api/contact with long message
    results.append(("POST /api/contact (long message)", test_contact_post_long_message()))
    
    # Test 7: GET /api/contact
    results.append(("GET /api/contact", test_contact_get(created_message_id)))
    
    # Summary
    print("\n" + "="*60)
    print("📊 TEST RESULTS SUMMARY")
    print("="*60)
    
    passed = 0
    failed = 0
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} - {test_name}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal: {passed + failed} tests")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests passed! Backend API is working correctly.")
        return True
    else:
        print(f"\n⚠️  {failed} test(s) failed. Please check the issues above.")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)