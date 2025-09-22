import { X, Download } from "lucide-react";

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-['Playfair_Display'] font-semibold text-[#2f2a1e]">
            Resume
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-hidden p-4">
          <iframe
            src="/Anuj_Gupta_Resume.pdf"
            title="Resume"
            className="w-full h-full border rounded-lg"
            style={{ height: "70vh" }}
          />
        </div>
        
        <div className="p-4 border-t flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          <a
            href="/Anuj_Gupta_Resume.pdf"
            download="Anuj_Gupta_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            <Download size={16} />
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;