# Employee Management API

Mock REST API for Employee Management System using JSON Server.

## Base URL

Production: `https://your-app-name.onrender.com`

## Endpoints

### Get all employees

\`\`\`
GET /employees
\`\`\`

### Get with pagination

\`\`\`
GET /employees?\_page=1&\_limit=10
\`\`\`

### Get with search

\`\`\`
GET /employees?name_like=Nguyen&email_like=gmail
\`\`\`

### Get with filter

\`\`\`
GET /employees?department=Kỹ thuật
\`\`\`

### Get with sorting

\`\`\`
GET /employees?\_sort=joinDate&\_order=desc
\`\`\`

### Get one employee

\`\`\`
GET /employees/:id
\`\`\`

### Create employee

\`\`\`
POST /employees
Content-Type: application/json

{
"name": "Nguyen Van A",
"email": "test@example.com",
"phone": "0987654321",
"department": "Kỹ thuật",
"joinDate": "2024-01-01"
}
\`\`\`

### Update employee

\`\`\`
PATCH /employees/:id
Content-Type: application/json

{
"name": "Updated Name"
}
\`\`\`

### Delete employee

\`\`\`
DELETE /employees/:id
\`\`\`

## Query Parameters

- `_page` - Page number (default: 1)
- `_limit` - Items per page (default: 10)
- `_sort` - Sort by field (e.g., name, joinDate)
- `_order` - Sort order (asc or desc)
- `name_like` - Search name (partial match)
- `email_like` - Search email (partial match)
- `department` - Filter by department (exact match)

## Combine Parameters

\`\`\`
GET /employees?\_page=2&\_limit=10&name_like=Van&department=Kỹ thuật&\_sort=joinDate&\_order=desc
\`\`\`

## Tech Stack

- JSON Server 0.16.3
- Node.js
- Express.js (included in JSON Server)

## Local Development

\`\`\`bash
npm install
npm start
\`\`\`

Server runs at: http://localhost:3001

## Deploy

Deployed on Render.com
