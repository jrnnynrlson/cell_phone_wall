### Preparation
1. Click "Allow camera" when this page loads.
2. Sign up for <a href="http://ifttt.com/">If This Then That</a>. IFTTT is a service for automating things online using simple applets that connect social media and other services.
3. Activate the <a href="http://ifttt.com/maker">Maker Webhooks Channel</a>.
4. Click "documentation" at the top right.
5. Copy the text where it says "your key is", something like `e8Elkvjyi...`.
6. Paste your key into this page in the field at the left that says "your key".
7. On IFTTT <a href="https://ifttt.com/create">create a new applet</a>.
8. Click on "this" and type "webhooks" into the search box, then select the "Webhooks" icon.
9. Click "Receive a web request".</li>
10. For "Event Name", you can type "face_detected" or "face_not_detected".
11. Click "that", and it will ask you what you want to do.
12. "Create action" then "Finish".


### Tips
1. Lighting your face from the front and slightly above allows for the best face tracking. Strong side lighting will make it hard to track.
2. More light helps the tracking, dim video can be too noisy.
3. Use an uncluttered background. Complex scenes can sometimes trick the code into seeing faces where there are none.
4. Consider chaining together multiple IFTT applets.


### Styling
1. You can edit the text/html that is displayed by editing the DIV elements with IDs "face_detected" and "face_not_detected" in the `index.html` file.
2. You can apply CSS rules by editing the `style.css` file.
