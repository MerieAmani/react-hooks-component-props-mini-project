# Personal Blog Site

This is a personal blog site built with React. The project includes various components to structure the blog, making it easy to manage and display content.

## Project Structure

```
personal-blog-site
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── ArticleList.jsx
│   │   └── Article.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles
│       └── styles.css
├── package.json
├── .gitignore
└── README.md
```

## Components

- **Header**: Displays the blog name.
- **About**: Shows a brief description of the blog along with an image.
- **ArticleList**: Renders a list of articles.
- **Article**: Displays individual article details including title, date, preview, and reading time.

## Features

- Dynamic data rendering through props.
- 'Minutes to read' feature for each article based on the read time.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Start the development server with `npm start`.

## License

This project is open-source and available under the MIT License.