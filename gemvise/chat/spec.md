# GemVise Specification

## Technical Configuration

### Typography
- Primary Font: Geist Sans (`var(--font-geist-sans)`)
- Monospace Font: Geist Mono (`var(--font-geist-mono)`)

### Theme Configuration
- Dark Mode: Enabled via 'class' strategy
- Responsive Design: Custom breakpoint '@sm' at 640px

### Color System
- Background: `var(--background)`
- Text:
  - Primary: `var(--text-primary)`
  - Secondary: `var(--text-secondary)`
- Buttons:
  - Primary: `var(--button-primary)`
  - Primary Hover: `var(--button-primary-hover)`
  - Secondary Hover: `var(--button-secondary-hover)`
  - Ghost Hover: `var(--button-ghost-hover)`
- UI Elements:
  - Toggle Border: `var(--toggle-border)`
  - Ring: `var(--ring)`
  - Popover: `var(--background)`
  - Popover Border: `var(--toggle-border)`
  - Card Hover: `var(--button-ghost-hover)`

## UI Design References
- Microsoft Copilot's squircle cards and gradient overlays
- Character.ai's conversational interface and gem profiles
- X.ai's minimalist layout and typography

## Gem Categories and Types

### Featured Gems
1. Latest News
   - Real-time news analysis and discussion
   - Expertise: Current events, analysis, fact-checking
   - UI: Large squircle card with news imagery

2. Companion
   - Friendly conversation and daily chat
   - Expertise: Empathy, active listening, casual conversation
   - UI: Medium squircle card with warm, inviting imagery

3. Unhinged Comedian
   - Humorous and entertaining interactions
   - Expertise: Comedy, improvisation, witty responses
   - UI: Medium squircle card with playful imagery

4. Loyal Friend
   - Supportive and understanding presence
   - Expertise: Emotional support, friendship, reliability
   - UI: Medium squircle card with friendly imagery

5. Homework Helper
   - Educational assistance and tutoring
   - Expertise: Academic subjects, study skills, explanations
   - UI: Medium squircle card with educational imagery

6. Not a Doctor
   - General health information (with disclaimers)
   - Expertise: Health education, wellness tips
   - UI: Medium squircle card with health-related imagery

7. Not a Therapist
   - General life advice (with disclaimers)
   - Expertise: Life skills, general guidance
   - UI: Medium squircle card with calming imagery

## UI Components

### Header
- Clean, minimal design with frosted glass effect
- Search bar with Copilot-style animations
- Theme switcher with smooth transitions
- Authentication buttons (Sign up/Login)

### Sidebar Navigation
- YouTube-style vertical menu
- Collapsible on mobile
- Category icons with labels
- Active state indicators

### Gem Cards
1. Large Featured Card (Copilot-style)
   - Squircle shape with 60px border radius
   - Gradient overlay with 70% black background
   - Blurred background image
   - Floating avatar with glow effect
   - Action button with hover animation

2. Medium Regular Card
   - Squircle shape with 48px border radius
   - Semi-transparent background
   - Hover scale effect (1.025)
   - Quick action buttons

### Chat Interface
- Character.ai style message bubbles
- Code block formatting
- Markdown support
- Real-time typing indicators
- Message reactions

### Gradients
1. Primary Gradient (Purple)
   ```css
   background: linear-gradient(135deg, #6B46C1, #9F7AEA);
   ```

2. Secondary Gradient (Pink)
   ```css
   background: linear-gradient(45deg, #D53F8C, #F687B3);
   ```

3. Accent Gradient (Steel)
   ```css
   background: linear-gradient(90deg, #2D3748, #4A5568);
   ```

4. Dark Mode Gradient
   ```css
   background: linear-gradient(180deg, #1A202C, #2D3748);
   ```

### Typography
- Body: Inter with optimized line height

### Animations
- Smooth transitions (200ms ease-in)
- Subtle hover effects
- Loading states with skeleton UI
- Page transitions

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## Interaction States

### Card Hover
- Scale: 1.025
- Shadow increase
- Gradient shift

### Button States
- Default: Semi-transparent
- Hover: Increased opacity
- Active: Scale down slightly
- Focus: Ring outline

### Navigation
- Default: Secondary color
- Hover: Primary color with background
- Active: Primary color with stronger background

## Implementation Notes

### Performance
- Next.js App Router
- React Server Components
- Optimized images
- Lazy loading

### Accessibility
- ARIA labels
- Keyboard navigation
- High contrast support
- Screen reader optimizations

### Security
- Protected routes
- Rate limiting
- Input sanitization
- Secure authentication

---