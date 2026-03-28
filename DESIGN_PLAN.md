# Habib DXN E-commerce Design Plan

## System Architecture

### Pages
1. **Home** - Product listing with hero section
2. **Product Detail** - Individual product page
3. **Cart** - Shopping cart with items
4. **Checkout** - Order form and payment selection
5. **Order Confirmation** - Success page

### Data Structure

#### Product
```typescript
{
  id: string
  name: string (Bengali)
  price: number (BDT)
  description: string (Bengali)
  image: string
  category: string
  benefits: string[]
}
```

#### Cart Item
```typescript
{
  productId: string
  quantity: number
  price: number
}
```

#### Order
```typescript
{
  id: string
  items: CartItem[]
  totalAmount: number
  paymentMethod: 'cod' | 'online'
  codAmount: 130 (fixed for Cash on Delivery)
  customerInfo: {
    name: string
    phone: string
    address: string
  }
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered'
}
```

### Payment System
- **Cash on Delivery (COD)**: Fixed payment of 130 BDT
- **Online Payment**: Full product amount (future feature)

### Design Style
- Modern, clean interface
- Bengali language support
- Mobile-responsive
- Warm, natural color palette (greens, golds)
- Professional product presentation

### Key Features
1. Product filtering by category
2. Add to cart functionality
3. Cart quantity management
4. Checkout with customer details
5. Payment method selection
6. Order confirmation with receipt
