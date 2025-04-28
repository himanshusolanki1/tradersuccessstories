# Trader Success Stories

A promotional website for "Trader Success Stories" featuring information about an exclusive USD/BRL OTC Bug trading group.

## Website Features

- Responsive design that works on all devices
- Dual language content (English and Hinglish)
- Animated countdown timer for urgency
- Testimonials section showcasing success stories
- Features section highlighting group benefits
- FAQ section addressing common questions

## How to Use This Website

### Setting Up Your Telegram Username

To set your Telegram username in the website, you need to:

1. Open the `index.html` file
2. Find all instances of `https://t.me/yourusername` and replace `yourusername` with your actual Telegram username

Alternatively, you can use the JavaScript function provided:

1. Open the `script.js` file
2. Uncomment the lines at the bottom of the file:
   ```javascript
   // Example: updateTelegramUsername('your_actual_username');
   ```
3. Replace `your_actual_username` with your actual Telegram username

### Customizing Content

You can easily customize the website by:

- Changing the texts in the `index.html` file
- Adjusting colors in the `:root` section of the `styles.css` file
- Adding more testimonials by copying and pasting the testimonial divs
- Updating the FAQ items with your own questions and answers

### Countdown Timer

By default, the countdown timer is set to 48 hours from when the user visits the page. You can change this in the `script.js` file:

```javascript
// Change this line to adjust the countdown duration
countdownDate.setHours(countdownDate.getHours() + 48);
```

## Hosting the Website

To make this website live:

1. Upload all three files (`index.html`, `styles.css`, and `script.js`) to your web hosting provider
2. Make sure all the files are in the same directory
3. The website should be immediately accessible once uploaded

## Customization Ideas

- Add more testimonials as your community grows
- Include real screenshots of trading results (with personal information blurred)
- Add a form to collect email addresses for follow-up marketing
- Integrate with Google Analytics to track visitor behavior 