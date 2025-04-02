'use client';
import { Tecnologies } from '@/components/techStack';
import ProjectsSection from '@/components/ProjectsSection';
import { About } from '@/components/About';

export default function Home() {
  return (
    <div>
    <About />
    <Tecnologies />
    <ProjectsSection />
    </div>
  );
}
