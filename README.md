# Bảng Báo Giá - Vietnamese Steel Price Management System

## 📋 Overview

Bảng Báo Giá is a comprehensive web application designed for **Công ty TNHH MTV Thép Hồ Bắc** (Ho Bac Steel Company) to manage and display steel product categories and pricing information. This system provides an intuitive interface for managing steel products, their specifications, and pricing details in Vietnamese.

## 🚀 Features

### Core Functionality

- **Category Management**: Create, read, update, and delete steel product categories
- **Product Management**: Manage detailed product information including specifications and pricing
- **Advanced Search**: Real-time search with Vietnamese accent-insensitive matching
- **Responsive Design**: Mobile-friendly interface that works across all devices
- **Professional UI**: Clean, business-appropriate design with custom fonts

### Technical Features

- **Live Search**: Instant filtering as users type (no page reload required)
- **Vietnamese Text Support**: Full support for Vietnamese characters and diacritics
- **Modal Forms**: Modern popup forms for editing categories
- **Image Support**: Product category images with fallback placeholders
- **Scalable Architecture**: MVC pattern with separate routes, models, and views

## 🛠️ Technology Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database via MongoDB Atlas
- **Mongoose** - MongoDB object modeling

### Frontend

- **EJS** - Embedded JavaScript templating
- **Bootstrap 5** - CSS framework for responsive design
- **Custom CSS** - Professional styling with Google Fonts (Tinos)
- **Vanilla JavaScript** - Client-side interactivity

### Development Tools

- **dotenv** - Environment variable management
- **Git** - Version control

## 📁 Project Structure

```
B-o-gi-/
├── controller/
│   ├── categoryRoute.js     # Category CRUD operations
│   └── productRoute.js      # Product CRUD operations
├── model/
│   ├── category-schema.js   # Category database schema
│   └── product-schema.js    # Product database schema
├── public/
│   ├── style.css           # Custom CSS styles
│   ├── script.js           # Client-side JavaScript
│   ├── favicon.png         # Website favicon
│   └── placeholder.png     # Default category image
├── views/
│   ├── partials/
│   │   ├── header.ejs      # Shared header component
│   │   └── footer.ejs      # Shared footer component
│   ├── index.ejs           # Homepage
│   ├── category.ejs        # Category management page
│   └── product-detail.ejs  # Product management page
├── server.js               # Main application entry point
├── package.json            # Project dependencies
└── .env.enc               # Environment variables (encrypted)
```

## 🗄️ Database Schema

### Category Model

```javascript
{
  name: String (required),      // Category name
  description: String,          // Category description
  image: String                 // Category image URL
}
```

### Product Model

```javascript
{
  name: String (required),      // Product name
  priceIn: Number,             // Input price
  priceOut: Number,            // Output price
  pricePer: Number,            // Price per unit
  weight: Number,              // Product weight
  width: Number,               // Product width
  thickness: Number,           // Product thickness
  length: Number,              // Product length
  category: ObjectId (required) // Reference to Category
}
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/MrSuckHellzz/B-o-gi-.git
   cd B-o-gi-
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.enc` file in the root directory:

   ```env
   PORT=4000
   MONGODB_CONNECTION_URI= mongodb+srv://admin:6Zd0rigJ0WydZc6A@cluster0.s0z1lf0.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0
   ```

4. **Start the application**

   ```bash
   npm start
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:4000`

## 📖 Usage Guide

### Category Management

1. **View Categories**: Navigate to `/category` to see all product categories
2. **Add Category**: Click "➕ Thêm nhóm hàng" to create a new category
3. **Search Categories**: Use the search bar for real-time filtering
4. **Edit Category**: Click "✏️ Sửa" on any category card
5. **Delete Category**: Click "❌ Xóa" to remove a category

### Product Management

1. **View Products**: Click on any category to see its products
2. **Add Product**: Use the "➕ Thêm sản phẩm" form to add new products
3. **Edit Product**: Click the edit button in the product table
4. **Delete Product**: Click the delete button to remove products

### Search Features

- **Real-time Search**: Results appear as you type
- **Vietnamese Support**: Search works with or without accents (e.g., "ton" finds "tôn")
- **Multi-word Search**: "Tôn Hoa Sen" finds "Tôn Lợp Màu Hoa Sen"

## 🎯 API Routes

### Category Routes (`/category`)

- `GET /category` - Display all categories
- `POST /category` - Create new category
- `POST /category/update/:id` - Update existing category
- `POST /category/delete/:id` - Delete category

### Product Routes (`/product`)

- `GET /product/:categoryId` - Display products for a category
- `POST /product/:categoryId` - Create new product in category
- `POST /product/update/:categoryId/:productId` - Update product
- `POST /product/delete/:categoryId/:productId` - Delete product

## 🔧 Configuration

### MongoDB Atlas Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Add your IP to the whitelist (0.0.0.0/0 for testing)
4. Create a database user
5. Get the connection string and add it to `.env.enc`

### Environment Variables

- `PORT`: Server port (default: 3000)
- `MONGODB_CONNECTION_URI`: MongoDB connection string

## 🎨 Customization

### Styling

- Modify `public/style.css` for visual changes
- Update Google Fonts imports for different typography
- Adjust color scheme by changing CSS variables

### Features

- Add new fields to schemas in `model/` directory
- Create new routes in `controller/` directory
- Add new views in `views/` directory

## 📝 License

This project is developed for **Công ty TNHH MTV Thép Hồ Bắc** (Ho Bac Steel Company). All rights reserved.

## 👥 Support

For technical support or questions:

- **Developer**: MrSuckHellzz, Kien2805 (Gabizz)
- **Company**: Công ty TNHH MTV Thép Hồ Bắc
- **GitHub**: [https://github.com/MrSuckHellzz/B-o-gi-](https://github.com/MrSuckHellzz/B-o-gi-)

---

Built with ❤️ for the Vietnamese steel industry
