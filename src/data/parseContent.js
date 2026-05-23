import rawContent from '../../aws_soa_c03_study_guide.md?raw';

function parseMarkdown(text) {
  const lines = text.split('\n');
  const sections = [];
  let currentSection = null;
  let currentSlide = null;
  let contentBuffer = [];

  function flushSlide() {
    if (currentSlide && currentSection) {
      currentSlide.content = contentBuffer.join('\n').trim();
      currentSection.slides.push(currentSlide);
    }
    contentBuffer = [];
    currentSlide = null;
  }

  function flushSection() {
    flushSlide();
    if (currentSection) {
      sections.push(currentSection);
    }
    currentSection = null;
  }

  // Skip the instructions section at top
  let pastInstructions = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Match ## headings (major sections)
    if (/^## \d+\./.test(line) || /^## /.test(line)) {
      const title = line.replace(/^## /, '').trim();
      // Skip "Table of Contents" and "INSTRUCTIONS" sections
      if (title === 'Table of Contents' || title === 'INSTRUCTIONS FOR CLAUDE CODE') {
        pastInstructions = false;
        flushSection();
        continue;
      }
      // Only process numbered sections
      if (/^\d+\./.test(title)) {
        pastInstructions = true;
        flushSection();
        currentSection = {
          id: sections.length,
          title: title,
          slides: [],
        };
      } else {
        flushSection();
        pastInstructions = false;
      }
      continue;
    }

    if (!pastInstructions) continue;

    // Match ### headings (slides/topics)
    if (/^### /.test(line)) {
      flushSlide();
      const slideTitle = line.replace(/^### /, '').trim();
      if (currentSection) {
        currentSlide = {
          id: `${currentSection.id}-${currentSection.slides.length}`,
          sectionId: currentSection.id,
          slideIndex: currentSection.slides.length,
          title: slideTitle,
          content: '',
        };
      }
      continue;
    }

    // Skip horizontal rules
    if (/^---+$/.test(line.trim())) continue;

    // Accumulate content for current slide
    if (currentSlide) {
      contentBuffer.push(line);
    }
  }

  // Flush any remaining
  flushSlide();
  if (currentSection) {
    sections.push(currentSection);
  }

  // Attach sectionTitle to each slide and build flat list
  const allSlides = [];
  sections.forEach((section) => {
    section.slides.forEach((slide) => {
      slide.sectionTitle = section.title;
      allSlides.push(slide);
    });
  });

  return { sections, allSlides };
}

const { sections, allSlides } = parseMarkdown(rawContent);

export { sections, allSlides };
export default { sections, allSlides };
