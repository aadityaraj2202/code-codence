import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import clsx from 'clsx'
import { Upload, File, Image, Film, Link, AlertCircle } from 'lucide-react'

const MAX_SIZE = 50 * 1024 * 1024 // 50MB

function FileUploadZone({ onDrop, accept, maxSize = MAX_SIZE, disabled = false }) {
  const onDropAccepted = useCallback(
    (files) => {
      onDrop(files)
    },
    [onDrop]
  )

  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    onDrop: onDropAccepted,
    accept: accept || {
      'application/pdf': ['.pdf'],
      'video/*': ['.mp4', '.webm', '.mov'],
      'image/*': ['.jpg', '.jpeg', '.png', '.gif'],
      'application/zip': ['.zip'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
    },
    maxSize,
    disabled,
    multiple: true,
  })

  return (
    <div>
      <div
        {...getRootProps()}
        className={clsx(
          'relative border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-200',
          isDragActive && !isDragReject && 'border-primary bg-primary-50 scale-[1.01]',
          isDragReject && 'border-danger bg-red-50',
          !isDragActive && !isDragReject && 'border-gray-200 bg-gray-50 hover:border-primary/50 hover:bg-primary-50/30',
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
        )}
      >
        <input {...getInputProps()} />

        <div className={clsx(
          'w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-200',
          isDragActive && !isDragReject ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
        )}>
          <Upload size={24} />
        </div>

        {isDragActive && !isDragReject && (
          <p className="text-base font-semibold text-primary">Drop your files here!</p>
        )}
        {isDragReject && (
          <p className="text-base font-semibold text-danger">File type not supported</p>
        )}
        {!isDragActive && !isDragReject && (
          <>
            <p className="text-sm font-semibold text-text-primary">
              Drag & drop files here, or{' '}
              <span className="text-primary underline">browse</span>
            </p>
            <p className="text-xs text-text-secondary mt-1">
              Supports PDF, Word, PowerPoint, Images, Videos (max {Math.round(maxSize / 1024 / 1024)}MB)
            </p>
          </>
        )}

        {/* Accepted types */}
        <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
          {[
            { icon: File, label: 'PDF' },
            { icon: Film, label: 'Video' },
            { icon: Image, label: 'Image' },
            { icon: Link, label: 'Docs' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1 text-xs text-text-secondary">
              <Icon size={12} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rejections */}
      {fileRejections.length > 0 && (
        <div className="mt-3 space-y-1">
          {fileRejections.map(({ file, errors }) => (
            <div key={file.name} className="flex items-center gap-2 text-xs text-danger bg-red-50 rounded-lg px-3 py-2">
              <AlertCircle size={12} />
              <span className="font-medium">{file.name}:</span>
              <span>{errors[0]?.message}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FileUploadZone
