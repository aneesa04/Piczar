# Piczar

🖼️ Piczar is a simple image search web application that allows users to find and browse images efficiently. It features an intuitive interface with the ability to search for images by keywords. 

## Features

### Image Search
- 🔍 **Search Images**: Users can search for images by entering keywords in the search bar.
- 📂 **Browse Results**: Display a collection of images related to the search query.
- 📄 **Pagination**: Offers pagination to navigate through multiple pages of search results, enhancing user experience.

### API Integration
- 🌐 **Pixabay API**: Piczar utilizes the Pixabay API to fetch and display images based on user queries.

## Contributing

- 🤝 Contributions to this project are welcome! If you have any ideas for new features or improvements, feel free to open an issue or submit a pull request. Here are some potential enhancements that could be implemented:
  - 📊 **Advanced Search Filters**: Allow users to filter images by category, color, and type.
  - ⭐ **Favorites**: Introduce a feature to let users save their favorite images for easy access later.

## Getting Started

To run the project locally, follow these steps:


- **Clone the repository** to your local machine:
- **Install dependencies**:
  - Ensure you have Node.js installed on your machine.
  - Open your terminal or command prompt.
  - Navigate to the `piczar` directory if you're not already there.
  - Run `npm install` to install all dependencies required for Piczar.

- **Set up environment variables**:
  - Obtain an API key from [Pixabay API](https://pixabay.com/api/docs/).
  - Create a new file named `.env` in the root of your `piczar` directory.
  - Inside `.env`, add the following line:
    ```
    REACT_APP_PIXABAY_API_KEY=YOUR_API_KEY
    ```
    Replace `YOUR_API_KEY` with your actual Pixabay API key.

- **Start the development server**:
  - In your terminal or command prompt, while still inside the `piczar` directory, run:
    ```
    npm start
    ```
  - This command starts the development server for Piczar.

- **Open Piczar in your web browser**:
  - Once the development server has started, open your web browser.
  - Navigate to `http://localhost:3000`.
  - This will load Piczar locally on your machine.

  Note: Replace `YOUR_API_KEY` with the actual API key obtained from Pixabay. This step is crucial to avoid errors related to missing API key during runtime.


## Technologies Used

- REACT
- TAILWINDCSS
- [Pixabay API](https://pixabay.com/api/docs/)

## What I Learned

- **Pagination**: Implemented pagination to manage and display large sets of image search results across multiple pages.
- **API Calls**: Learned how to make asynchronous API calls using JavaScript to fetch data from external sources and integrate it into the application.

## Acknowledgements

- 🙏 This project was created as part of a learning exercise and was inspired by various image search applications available online. 

Feel free to explore the codebase, suggest improvements, or contribute to make this Piczar application even better! 🚀
