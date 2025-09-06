import { Badge } from "../ui/badge"

export const sections = [
  { 
    id: 'hero', 
    subtitle: <Badge variant="outline" className="text-white border-white">simtropolis</Badge>,
    title: "agentic operating system",
    showButton: true,
    buttonText: 'Coming soon...',
  },
  { 
    id: 'about', 
    title: 'history',
    content: 'People have long imagined machines with human abilities – automata that move and devices that reason. Aristotle dreamed of automation, “For suppose that every tool we had could perform its task, either at our bidding or itself perceiving the need, of their own accord. This is an autonomous agent.'
  },
  { 
    id: 'features', 
    title: 'vision',
    content: 'Specialised autonomous agents for coding, collaboration, process automation, advanced search, discovery and retrieval.'
  },
  { 
    id: 'testimonials', 
    title: 'game development',
    content: 'Create 2D and 3D games from a unified interface powered by foundation models. Using a set of agentic tools to design and execute advanced diffusion pipelines, generate textured 3D meshes with complex topology, rich geometric details, and high fidelity textures.'
  },
  // {
  //   id: 'join',
  //   title: 'Get Started',
  //   content: 'Ready to take your game develop project to the next level? Join our community today and start building your games.',
  //   showButton: true,
  //   buttonText: 'Join Now'
  // },
]
