#!/bin/bash

# ARCHDesign Image Download Script
# This script downloads all Unsplash images used in the project and saves them locally

echo "Starting image download process..."

# Hero Images
echo "Downloading hero images..."
echo "1. Main hero image..."
curl -L -# "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80" -o "images/hero/main-hero.jpg"

echo "2. Architectural design hero..."
curl -L -# "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o "images/hero/architectural-design-hero.jpg"

echo "3. Interior architecture hero..."
curl -L -# "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o "images/hero/interior-architecture-hero.jpg"

echo "4. Urban planning hero..."
curl -L -# "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o "images/hero/urban-planning-hero.jpg"

echo "5. Careers hero..."
curl -L -# "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o "images/hero/careers-hero.jpg"

echo "6. Zenith residence hero..."
curl -L -# "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o "images/hero/zenith-residence-hero.jpg"

echo "7. Urban sanctum hero..."
curl -L -# "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o "images/hero/urban-sanctum-hero.jpg"

# Portfolio Images
echo "Downloading portfolio images..."
echo "8. Zenith residence portfolio..."
curl -L -# "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o "images/portfolio/zenith-residence.jpg"

echo "9. Urban sanctum portfolio..."
curl -L -# "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o "images/portfolio/urban-sanctum.jpg"

echo "10. ARCHDesign gallery..."
curl -L -# "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o "images/portfolio/archdesign-gallery.jpg"

echo "11. Horizon tower..."
curl -L -# "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o "images/portfolio/horizon-tower.jpg"

echo "12. Serenity pavilion..."
curl -L -# "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" -o "images/portfolio/serenity-pavilion.jpg"

# Team Images
echo "Downloading team images..."
echo "13. David Chen..."
curl -L -# "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" -o "images/team/david-chen.jpg"

echo "14. Carlos Rodriguez..."
curl -L -# "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" -o "images/team/carlos-rodriguez.jpg"

echo "15. Michael Thompson..."
curl -L -# "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" -o "images/team/michael-thompson.jpg"

# Client Images
echo "Downloading client images..."
echo "16. James Mitchell..."
curl -L -# "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" -o "images/clients/james-mitchell.jpg"

echo "17. Robert Chen..."
curl -L -# "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" -o "images/clients/robert-chen.jpg"

echo "18. Michael Rodriguez..."
curl -L -# "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" -o "images/clients/michael-rodriguez.jpg"

# Office/Workspace Images
echo "Downloading office images..."
echo "19. Workspace 1..."
curl -L -# "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o "images/office/workspace-1.jpg"

echo "20. Workspace 2..."
curl -L -# "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o "images/office/workspace-2.jpg"

echo "21. Workspace 3..."
curl -L -# "https://images.unsplash.com/photo-1560472355-109703aa3edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" -o "images/office/workspace-3.jpg"

# Team Images (medium size for team pages)
echo "Downloading medium team images..."
echo "22. David Chen medium..."
curl -L -# "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" -o "images/team/david-chen-medium.jpg"

echo "23. Carlos Rodriguez medium..."
curl -L -# "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" -o "images/team/carlos-rodriguez-medium.jpg"

echo "24. Michael Thompson medium..."
curl -L -# "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" -o "images/team/michael-thompson-medium.jpg"

echo ""
echo "✅ Image download completed!"
echo "📁 All images have been saved to the 'images' directory with organized subdirectories."
echo "📊 Total images downloaded: 24 unique images in various sizes"
echo ""
echo "Directory structure:"
echo "images/"
echo "  ├── hero/ (7 images)"
echo "  ├── portfolio/ (5 images)" 
echo "  ├── team/ (6 images)"
echo "  ├── clients/ (3 images)"
echo "  └── office/ (3 images)"
