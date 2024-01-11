import requests

# Replace the URL with the actual URL you want to make a POST request to
address_url = "https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ViewPollingLocation.aspx"
voter_info_url = "https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ViewPollingLocationDetails.aspx"

# Replace the form data with your actual form data
form_data = {
    'ctl00$VoterRegPortalMaster$ASPxCBPanelMain$txtResHouseNo': '315',
    'ctl00$VoterRegPortalMaster$ASPxCBPanelMain$pnlResStreetName$cbResStreetName': 'JULIE DR',
    'VoterRegPortalMaster_ASPxCBPanelMain_cbResState_VI': 'ID',
}

# Make the POST request
session = requests.Session()
response = session.post(address_url, data=form_data)

# Check the response status code
if response.status_code == 200:
    print("POST request successful!")
    print("Response:")
    # print(response.text)
    # print(response)

    response2 = session.get(voter_info_url)
    print(response2.text)
else:
    print(f"POST request failed with status code {response.status_code}")
    print("Response:")
    print(response.text)
