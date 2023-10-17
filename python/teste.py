import requests
from bs4 import BeautifulSoup
import json
import os
import wget

# Gets HTML content of the page
def get_html(url):
    try:
        response = requests.get(url)
        return response.text

    except Exception as e:
        print(str(e))
        return None

# Download the video
def download_video(media):
    outfile = os.path.join("./", 'out.mp4')
    wget.download(media, out=outfile)

# Get the video link from page content
def get_video_link(html_content):
    soup = BeautifulSoup(html_content, 'lxml')
    script = soup.find('script', text=lambda t: t.startswith('window._sharedData'))
    page_json = script.text.split(' = ', 1)[1].rstrip(';')
    data = json.loads(page_json)

    try:
        media =  data["entry_data"]["PostPage"][0]["graphql"]["shortcode_media"]["video_url"]
    except (ValueError, KeyError) as e:
        print(f"Key error: {e}")
        media = None

    return media


if __name__ == "__main__":
    url = "https://www.instagram.com/reel/CyJM8xUL2gm/?igshid=MzRlODBiNWFlZA=="
    html_content = get_html(url)
    media_url = ''

    if html_content:
        media_url = get_video_link(html_content)

    if media_url:
        download_video(media_url)
