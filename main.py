from google import genai

client= genai.CLient(" ") ##api key goes here 

response = client.models.generate_content(
    model="gemini-2.0-flash", contents=" Explain how AI works in a few words"
)

print(response.txt)