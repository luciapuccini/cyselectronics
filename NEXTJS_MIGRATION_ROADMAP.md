# Next.js Migration Roadmap

## Overview
This roadmap outlines a progressive migration strategy from React Router to Next.js, allowing for zero downtime and controlled rollout using the `?next` search parameter flag.



###  Foundation Setup

#### Install Next.js and Dependencies

#### Update Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "dev:legacy": "react-scripts start",
    "build:legacy": "react-scripts build"
  }
}
```

#### Create Next.js Project Structure
```
src/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   ├── company/
│   ├── contact/
│   ├── products/
│   ├── services/
│   └── globals.css   # Global styles
├── components/       # Shared components
├── lib/             # Utilities and configurations
└── styles/          # CSS modules
```

### Core Infrastructure 

#### Create Next.js Layout System
- Implement root layout with NavBar and Footer
- Set up SCSS modules, leaving styled components behind
- Evaluate Material-UI & older dependencies that can be a quick win to remove

####  Implement Routing Bridge
Create a compatibility layer to handle URL parameters and routing between systems.
```
  const navigate = (path: string) => {
    if (isNext) {
      // Next.js navigation (will be available after full setup)
      import('next/router').then(({ useRouter }) => {
        const router = useRouter();
        router.push(path);
      });
    } else {
      // React Router navigation
      import('react-router-dom').then(({ history }) => {
        history.push(path);
      });
    }
  };
  return { navigate };
```

###  Progressive Page Migration 

#### Migration Priority Order
1. **Error Page** (Simplest, foundation + shared components)
2. **Home Page** (Most visited, high impact)
3. **Contact Page** (Simple form, good test case)
4. **Company Page** (Static content, low complexity)
5. **Services Page** (Medium complexity)
6. **Products Page** (Most complex, migrate last)

#### 3.2 Page Migration Template

3. **QA Checklist**
   - [ ] Page renders correctly with `?next`
   - [ ] All functionality works
   - [ ] SEO metadata is present
   - [ ] Performance is acceptable
   - [ ] No console errors
   - [ ] Has minimal test

#### Component Migration Strategy

**Shared Components**: Migrate once, use in both systems
- NavBar → Update to work with Next.js Link
- Footer → No changes needed
- Common UI components → Ensure compatibility

**Page-Specific Components**: Migrate with parent page

### Take benefit of the new stack

#### Asset Optimization
- Implement Next.js Image component for better performance
- Configure static asset handling /cache
- Optimize font loading
- Optimize bundle size
- Set up monitoring and analytics

### Testing Strategy
- deploy branch in dummy netlify app to verify full build process

### Cleanup 
- Delete React Router components
- Remove feature flag logic
- Clean up unused dependencies
- Update documentation


## Benefits of This Approach

### 1. Zero Downtime Migration
- Legacy app continues serving users
- New app tested thoroughly before full rollout
- Instant rollback capability via feature flag

### 2. Risk Mitigation
- Page-by-page migration reduces impact
- Easier to debugg
- Performance comparison at each step

### 3. Controlled Testing
- QA can test individual pages in isolation
- Staging environment mirrors production setup
- A/B testing capabilities between versions

### 4. Business Continuity
- No disruption to user experience
- Gradual performance improvements
- SEO maintained throughout migration


## Success Criteria

- [ ] All pages render correctly with `?next` parameter
- [ ] Performance scores improve (Core Web Vitals)
- [ ] No regression in SEO rankings
- [ ] Zero downtime during migration
- [ ] Legacy code cleanup completed
