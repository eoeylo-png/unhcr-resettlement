import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, ZoomIn, ZoomOut, RotateCw, Share2, Bookmark, FileText, Eye } from 'lucide-react';

const PDFViewerPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  
  const docId = searchParams.get('doc');
  
  // Mock document data - in a real app, this would come from an API
  const documents = {
    'resettlement-handbook': {
      title: 'UNHCR Resettlement Handbook',
      description: 'Comprehensive guide to resettlement procedures and best practices',
      pages: 156,
      size: '2.4 MB',
      lastUpdated: 'December 2023',
      category: 'Guidance',
      language: 'English',
      url: 'https://www.unhcr.org/media/resettlement-handbook'
    },
    'resettlement-statistics-2023': {
      title: 'Global Resettlement Statistical Report 2023',
      description: 'Annual statistics and trends in refugee resettlement worldwide',
      pages: 89,
      size: '1.8 MB',
      lastUpdated: 'November 2023',
      category: 'Statistics',
      language: 'English',
      url: 'https://www.unhcr.org/media/resettlement-statistics-2023'
    },
    'submission-categories': {
      title: 'Resettlement Submission Categories',
      description: 'Detailed criteria and guidelines for different resettlement submission categories',
      pages: 45,
      size: '956 KB',
      lastUpdated: 'October 2023',
      category: 'Guidance',
      language: 'English',
      url: 'https://www.unhcr.org/media/submission-categories'
    }
  };

  const currentDoc = docId ? documents[docId as keyof typeof documents] : null;

  useEffect(() => {
    if (!currentDoc) {
      navigate('/');
    }
  }, [currentDoc, navigate]);

  if (!currentDoc) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Document Not Found</h2>
          <p className="text-gray-600 mb-4">The requested document could not be found.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => navigate(-1)}
                className="mr-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{currentDoc.title}</h1>
                <p className="text-sm text-gray-600">{currentDoc.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-sm border-r overflow-y-auto">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Document Information</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Category</label>
                <p className="text-sm text-gray-900">{currentDoc.category}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Pages</label>
                <p className="text-sm text-gray-900">{currentDoc.pages} pages</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">File Size</label>
                <p className="text-sm text-gray-900">{currentDoc.size}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Language</label>
                <p className="text-sm text-gray-900">{currentDoc.language}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Last Updated</label>
                <p className="text-sm text-gray-900">{currentDoc.lastUpdated}</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-md font-semibold text-gray-900 mb-3">Table of Contents</h4>
              <div className="space-y-2">
                {[
                  'Executive Summary',
                  'Introduction',
                  'Legal Framework',
                  'Resettlement Process',
                  'Submission Categories',
                  'Country Profiles',
                  'Statistical Analysis',
                  'Recommendations',
                  'Appendices'
                ].map((chapter, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    onClick={() => setCurrentPage(index * 10 + 1)}
                  >
                    {index + 1}. {chapter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="bg-white border-b px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="text-sm text-gray-600">
                  Page {currentPage} of {currentDoc.pages}
                </span>
                <button 
                  onClick={() => setCurrentPage(Math.min(currentDoc.pages, currentPage + 1))}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  disabled={currentPage === currentDoc.pages}
                >
                  Next
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setZoom(Math.max(50, zoom - 25))}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-sm text-gray-600 min-w-16 text-center">{zoom}%</span>
              <button 
                onClick={() => setZoom(Math.min(200, zoom + 25))}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setRotation((rotation + 90) % 360)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Area */}
          <div className="flex-1 bg-gray-200 p-8 overflow-auto">
            <div className="max-w-4xl mx-auto">
              <div 
                className="bg-white shadow-lg mx-auto"
                style={{ 
                  transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                  transformOrigin: 'center top',
                  width: '210mm',
                  minHeight: '297mm'
                }}
              >
                {/* Mock PDF Content */}
                <div className="p-12 space-y-6">
                  <div className="text-center border-b pb-6">
                    <div className="bg-blue-600 text-white p-3 rounded mb-4 inline-block">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentDoc.title}</h1>
                    <p className="text-lg text-gray-600">{currentDoc.description}</p>
                    <div className="mt-4 text-sm text-gray-500">
                      UNHCR - The UN Refugee Agency | {currentDoc.lastUpdated}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Executive Summary</h2>
                    <p className="text-gray-700 leading-relaxed">
                      This document provides comprehensive guidance on refugee resettlement procedures, 
                      policies, and best practices. It serves as a primary resource for UNHCR staff, 
                      government officials, and implementing partners involved in resettlement operations.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Resettlement is a vital tool for international protection and a durable solution 
                      for refugees who cannot return to their country of origin or remain in their 
                      country of first asylum. This handbook outlines the legal framework, operational 
                      procedures, and quality standards that guide UNHCR's resettlement work globally.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-6">Key Topics Covered</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Legal and policy framework for resettlement</li>
                      <li>Identification and assessment procedures</li>
                      <li>Submission categories and criteria</li>
                      <li>Case processing and documentation</li>
                      <li>Quality assurance and monitoring</li>
                      <li>Partnership and coordination mechanisms</li>
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg mt-6">
                      <div className="flex items-start">
                        <Eye className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-900">Document Preview</h4>
                          <p className="text-blue-800 text-sm">
                            This is a preview of the document. The full PDF contains {currentDoc.pages} pages 
                            with detailed information, charts, and appendices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewerPage;