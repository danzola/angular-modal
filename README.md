# Angular Modal System

A comprehensive, production-ready modal and dialog system built with Angular 15 and PrimeNG. This project provides a flexible, reusable solution for creating various types of dialogs including alerts, confirmations, prompts, and complex dynamic forms.

## 🚀 Features

### Dialog Types
- **Alert Dialogs**: Simple information messages with customizable icons
- **Confirm Dialogs**: Yes/No confirmation dialogs with custom labels
- **Prompt Dialogs**: Text input dialogs with validation
- **Form Dialogs**: Dynamic form generation with multiple field types

### Field Types Supported
- **Text Inputs**: text, password, email
- **Numeric**: number with min/max/step validation
- **Selection**: select, multiselect, radio buttons, checkboxes
- **Date & Time**: date, time, datetime pickers
- **Multiline**: textarea with configurable rows
- **File Upload**: single or multiple file selection

### Key Features
- 🎨 **Responsive Design**: Mobile-friendly with breakpoint support
- 🔒 **Form Validation**: Built-in validation with error messages
- 🎯 **Type Safety**: Full TypeScript support with interfaces
- 🎭 **Customizable**: Configurable labels, icons, and styling
- ♿ **Accessible**: Proper ARIA attributes and keyboard navigation
- 📱 **Touch Friendly**: Optimized for mobile devices

## 🛠️ Technology Stack

- **Angular**: 15.2.0
- **PrimeNG**: 15.1.1 (UI Components)
- **PrimeFlex**: 3.3.0 (CSS Utilities)
- **PrimeIcons**: 6.0.1 (Icon Library)
- **TypeScript**: 4.9.4

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd angular-modal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Navigate to** `http://localhost:4200/`

## 🎯 Usage

### Basic Dialog Operations

#### Alert Dialog
```typescript
import { ModalService } from './services/modal.service';

constructor(private modal: ModalService) {}

async showSuccess() {
  await this.modal.alert({
    title: 'Success!',
    text: 'Operation completed successfully.',
    icon: 'success',
    okLabel: 'Great!'
  });
}
```

#### Confirm Dialog
```typescript
async confirmDelete() {
  const confirmed = await this.modal.confirm({
    title: 'Delete Item',
    text: 'Are you sure you want to delete this item?',
    icon: 'warn',
    okLabel: 'Yes, Delete',
    cancelLabel: 'Cancel'
  });
  
  if (confirmed) {
    // Proceed with deletion
  }
}
```

#### Prompt Dialog
```typescript
async getUsername() {
  const username = await this.modal.prompt({
    title: 'Enter Username',
    text: 'Please provide your username:',
    icon: 'question',
    placeholder: 'e.g., john_doe',
    defaultValue: 'guest'
  });
  
  if (username) {
    console.log('Username:', username);
  }
}
```

### Advanced Form Dialogs

#### Dynamic Form Generation
```typescript
async createCampaign() {
  const result = await this.modal.form({
    title: 'New Campaign',
    text: 'Please fill in the campaign details:',
    icon: 'question',
    okLabel: 'Create Campaign',
    cancelLabel: 'Cancel',
    fields: [
      {
        key: 'name',
        type: 'text',
        label: 'Campaign Name',
        required: true,
        placeholder: 'Enter campaign name'
      },
      {
        key: 'description',
        type: 'textarea',
        label: 'Description',
        rows: 3,
        placeholder: 'Describe your campaign'
      },
      {
        key: 'startDate',
        type: 'date',
        label: 'Start Date',
        required: true
      },
      {
        key: 'budget',
        type: 'number',
        label: 'Budget',
        min: 0,
        max: 1000000,
        step: 100
      },
      {
        key: 'category',
        type: 'select',
        label: 'Category',
        required: true,
        options: [
          { label: 'Marketing', value: 'marketing' },
          { label: 'Sales', value: 'sales' },
          { label: 'Support', value: 'support' }
        ]
      },
      {
        key: 'tags',
        type: 'multiselect',
        label: 'Tags',
        options: [
          { label: 'Digital', value: 'digital' },
          { label: 'Traditional', value: 'traditional' },
          { label: 'Social Media', value: 'social' }
        ]
      },
      {
        key: 'active',
        type: 'checkbox',
        label: 'Active Campaign'
      }
    ]
  });

  if (result) {
    console.log('Campaign data:', result);
    // Process the form data
  }
}
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── main/
│   │   ├── components/
│   │   │   ├── form-dialog/          # Dynamic form dialog component
│   │   │   └── generic-dialog/       # Alert/confirm/prompt dialog component
│   │   ├── interfaces/               # TypeScript interfaces
│   │   ├── services/
│   │   │   └── modal.service.ts      # Core modal service
│   │   └── pages/
│   │       └── main/                 # Demo page with examples
│   └── app.module.ts                 # Root module
```

## 🔧 Configuration

### Dialog Breakpoints
The system automatically adjusts dialog sizes for different screen sizes:
- **Desktop**: 40rem (form), 32rem (generic)
- **Tablet (1199px)**: 60vw/50vw
- **Mobile (991px)**: 70vw
- **Small Mobile (575px)**: 90vw

### Styling
The project uses PrimeNG's Lara Light Blue theme by default. You can customize:
- Theme colors in `angular.json`
- Component styles in individual component CSS files
- Global styles in `src/styles.css`

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## 📱 Responsive Behavior

- **Desktop**: Full-size dialogs with optimal spacing
- **Tablet**: Adjusted widths for medium screens
- **Mobile**: Touch-optimized with full-width dialogs
- **Touch Support**: All components are touch-friendly

## 🎨 Customization

### Custom Icons
```typescript
iconMap: Record<string, string> = {
  info: 'pi pi-info-circle text-primary',
  success: 'pi pi-check-circle text-green-500',
  warn: 'pi pi-exclamation-triangle text-yellow-500',
  error: 'pi pi-times-circle text-red-500',
  question: 'pi pi-question-circle text-primary',
};
```

### Custom Validation
```typescript
// Add custom validators to form fields
{
  key: 'phone',
  type: 'text',
  label: 'Phone Number',
  pattern: '^[0-9]{10}$',
  hint: 'Enter 10-digit phone number'
}
```

## 🚀 Build & Deploy

### Development Build
```bash
npm run build
```

### Production Build
```bash
npm run build --prod
```

### Watch Mode
```bash
npm run watch
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For questions, issues, or feature requests:
- Create an issue in the repository
- Check the existing documentation
- Review the demo examples in the main component

## 🔮 Roadmap

- [ ] Dialog animations and transitions
- [ ] Dialog stacking for complex workflows
- [ ] Keyboard navigation improvements
- [ ] Dialog history and back navigation
- [ ] Additional field types (rich text, color picker)
- [ ] Internationalization (i18n) support
- [ ] Theme customization options
- [ ] Performance optimizations

---

**Built with ❤️ using Angular and PrimeNG**
