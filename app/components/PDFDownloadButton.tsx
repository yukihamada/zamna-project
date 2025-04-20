'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PDFDownloadButtonProps {
  contentId: string;
  fileName: string;
}

// Helper function to convert oklch to RGB
function convertOklchToRgb(oklchStr: string): string {
  // Default fallback color if conversion fails
  const fallbackColor = '#ffffff';
  
  try {
    // Simple replacement for oklch colors - convert to standard RGB
    if (oklchStr.includes('oklch')) {
      // For simplicity, we'll map common oklch values to hex colors
      if (oklchStr.includes('0.2')) return '#1a1a1a'; // Dark background
      if (oklchStr.includes('0.9')) return '#ffffff'; // White text
      if (oklchStr.includes('0.6')) return '#2563eb'; // Blue buttons
      return fallbackColor;
    }
    return oklchStr;
  } catch (e) {
    console.warn('Failed to convert color:', oklchStr);
    return fallbackColor;
  }
}

export default function PDFDownloadButton({ contentId, fileName }: PDFDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const { language } = useLanguage();

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      const contentElement = document.getElementById(contentId);
      
      if (!contentElement) {
        console.error(`Element with ID ${contentId} not found`);
        setIsGenerating(false);
        return;
      }
      
      // Create a clone of the element to avoid modifying the original
      const clone = contentElement.cloneNode(true) as HTMLElement;
      clone.style.width = `${contentElement.offsetWidth}px`;
      clone.style.padding = '20px';
      clone.style.backgroundColor = '#1a1a1a';
      
      // Fix color functions that jsPDF doesn't support
      const allElements = clone.querySelectorAll('*');
      allElements.forEach(el => {
        const element = el as HTMLElement;
        const computedStyle = window.getComputedStyle(element);
        
        // Convert any oklch colors to RGB
        const color = computedStyle.color;
        const bgColor = computedStyle.backgroundColor;
        const borderColor = computedStyle.borderColor;
        
        // Replace with RGB values
        element.style.color = color.includes('oklch') ? convertOklchToRgb(color) : color;
        element.style.backgroundColor = bgColor.includes('oklch') ? convertOklchToRgb(bgColor) : bgColor;
        element.style.borderColor = borderColor.includes('oklch') ? convertOklchToRgb(borderColor) : borderColor;
        
        // Remove any tailwind classes that might use oklch
        if (element.className && typeof element.className === 'string') {
          const classesToRemove = [
            'bg-blue-600', 'hover:bg-blue-700', 'bg-blue-500', 'hover:bg-blue-600',
            'text-blue-500', 'hover:text-blue-600', 'border-blue-500'
          ];
          classesToRemove.forEach(cls => {
            if (element.classList.contains(cls)) {
              element.classList.remove(cls);
              if (cls.includes('blue') && cls.includes('bg')) {
                element.style.backgroundColor = '#2563eb'; // Standard hex for blue
              }
              if (cls.includes('blue') && cls.includes('text')) {
                element.style.color = '#2563eb';
              }
              if (cls.includes('blue') && cls.includes('border')) {
                element.style.borderColor = '#2563eb';
              }
            }
          });
        }
      });
      
      // Temporarily append to body but hide it
      clone.style.position = 'absolute';
      clone.style.left = '-9999px';
      document.body.appendChild(clone);
      
      // Generate canvas from the cloned element
      const canvas = await html2canvas(clone, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#1a1a1a'
      });
      
      // Remove the clone from the DOM
      document.body.removeChild(clone);
      
      // Calculate PDF dimensions (A4 format)
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      
      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      // Add subsequent pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      // Save the PDF
      pdf.save(`${fileName}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      style={{ backgroundColor: '#2563eb' }}
      className="flex items-center gap-2 text-white py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Download size={18} />
      {isGenerating 
        ? (language === 'en' ? 'Generating PDF...' : 'PDF生成中...') 
        : (language === 'en' ? 'Download PDF' : 'PDFをダウンロード')}
    </button>
  );
}