# Filter Button Project Documentation

## Overview
A React-based filter component built with TypeScript and Next.js that provides an interactive filtering interface. The project implements a dropdown filter system with multiple selection capabilities and AND/OR logic operations.

## Key Features
- Dynamic filter dropdown
- Multi-select filter options
- AND/OR logic between filters
- Search functionality within filters
- Bootstrap-based styling
- Fully TypeScript supported
- Client-side state management using Context API

## Project Structure
```plaintext
filterapp/
├── components/
│   ├── AndOrButton.tsx        # Toggle button for AND/OR operations
│   ├── BootstrapClient.tsx    # Bootstrap initialization
│   ├── ContentTag.tsx         # Individual filter tag display
│   ├── FilterButton.tsx       # Main filter button component
│   ├── SearchFilter.tsx       # Search functionality within filters
│   └── SelectOptionDropdown.tsx # Dropdown for filter options
├── context/
│   └── FilterContext.tsx      # Global state management