import requests
url = "https://discord.com/api/v8/applications/800871330693906432/commands"
json = {
    "name": "phategg",
    "description": "Sends pictures of a robot"
    
}
headers = {
    "Authorization": "ODAwODcxMzMwNjkzOTA2NDMy.YAYbjA.hmrc1hl7WDqAvbq8rOREgI8Inhk"
}
r = requests.post(url, headers=headers, json=json)
print(r.raw)
