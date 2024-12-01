'use client';
import { Typing } from '@/components/typing';
import { About } from '@/components/About';
import { Tecnologies } from '@/components/techStack';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <div>
    <Typing />
    <About />
    <Tecnologies />
    <ProjectsSection />
    </div>
  );
}
