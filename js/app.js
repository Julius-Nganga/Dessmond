// API base URL
const API_BASE = '/api';

// Contact form submission
document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const formData = {
    name: this.name.value,
    email: this.email.value,
    subject: this.subject.value,
    message: this.message.value
  };
  
  try {
    const response = await fetch(`${API_BASE}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    
    if (response.ok) {
      alert('Thank you for your message! Desmond will get back to you soon.');
      this.reset();
    } else {
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  } catch (error) {
    alert('Sorry, there was an error sending your message. Please try again.');
  }
});

// Load photos for gallery
async function loadGalleryPhotos(category = 'all') {
  try {
    const response = await fetch(`${API_BASE}/photos?category=${category}&limit=12`);
    const data = await response.json();
    
    if (response.ok) {
      displayPhotos(data.photos);
    }
  } catch (error) {
    console.error('Error loading photos:', error);
  }
}

// Load blog posts
async function loadBlogPosts() {
  try {
    const response = await fetch(`${API_BASE}/photos?limit=6`);
    const data = await response.json();
    
    if (response.ok) {
      displayBlogPosts(data.photos);
    }
  } catch (error) {
    console.error('Error loading blog posts:', error);
  }
}