# React Photo Gallery

A responsive Photo Gallery web application built using **React, Vite, and Tailwind CSS**.  
The application fetches images from the Picsum Photos API, displays them in a responsive grid, allows real-time search by author name, and lets users mark photos as favourites.

---

## Features

- Fetch photos from the **Picsum Photos API**
- Responsive grid layout (mobile, tablet, desktop)
- Real-time search filtering by author name
- Mark photos as favourites
- Favourite photos persist after page refresh using **localStorage**
- State management using **useReducer**
- Performance optimization using **useMemo** and **useCallback**
- Custom React hook for data fetching

---

## Technologies Used

- React  
- Vite  
- Tailwind CSS  
- JavaScript (ES6+)

---

## Project Structure


src
├── components
│ ├── SearchBar.jsx
│ ├── Gallery.jsx
│ └── PhotoCard.jsx
│
├── hooks
│ └── useFetchPhotos.js
│
├── reducers
│ └── favoritesReducer.js
│
├── App.jsx
└── main.jsx


---

## Installation and Setup

Clone the repository


git clone https://github.com/YOUR_USERNAME/react-photo-gallery.git


Navigate into the project folder


cd react-photo-gallery


Install dependencies


npm install


Run the development server


npm run dev


Open the application in your browser


http://localhost:5173


---

## How It Works

1. The application fetches 30 photos from the Picsum Photos API when the app loads.  
2. Photos are displayed in a responsive grid layout.  
3. Users can search photos by author name using the search bar.  
4. Users can mark photos as favourites using the heart icon.  
5. Favourite photos are stored in localStorage so they persist after refresh.

---

## Assignment

This project was built as part of a **Frontend React Internship Pre-Screening Assignment**.

The implementation demonstrates:

- Custom Hooks
- Reducer-based state management
- Performance optimization using React hooks
- Component-based architecture

---

## Author

**Anushka Srivastava**  
B.Tech IT – KIET Deemed-to-be University

Then run:

git add README.md
git commit -m "Added README"
git push
