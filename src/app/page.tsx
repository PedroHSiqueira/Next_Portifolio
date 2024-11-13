'use client';
import { Typing } from '@/components/typing';
import Header from '../components/header';
import { About } from '@/components/About';
import { Tecnologies } from '@/components/techStack';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <>
    <Typing />
    <About />
    <Tecnologies />
    <ProjectsSection />
    </>
  );
}
