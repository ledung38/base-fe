import React, { useCallback, useRef, useState } from "react";

import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

export type FileWithPreview = File & {
  preview?: string;
  uid: string;
  submissionUrl?: string;
  fileName?: string;
};

type UploadProps = {
  className?: string;
  multiple?: boolean;
  accept?: string;
  maxSize?: number;
  onChange?: (files: FileWithPreview[]) => void;
  onError?: (error: string) => void;
  children?: React.ReactNode;
  noDrag?: boolean;
  disabled?: boolean;
};

const Upload = ({
  className,
  multiple = false,
  accept,
  maxSize,
  onChange,
  onError,
  children,
  noDrag = false,
  disabled = false,
}: UploadProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if (disabled) return;
      e.preventDefault();
      e.stopPropagation();

      const droppedFiles = Array.from(e.dataTransfer.files);
      handleFiles(droppedFiles);
    },
    [disabled]
  );

  const handleFiles = useCallback(
    (newFiles: File[]) => {
      if (disabled) return;

      const validFiles = newFiles.filter((file) => {
        if (maxSize && file.size > maxSize) {
          onError?.(`File ${file.name} không được lớn hơn ${maxSize} bytes`);
          return false;
        }
        if (accept && !file.type.match(accept.replace(/,/g, "|"))) {
          onError?.(`File ${file.name} không được hỗ trợ`);
          return false;
        }
        return true;
      });

      const filesWithPreview = validFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          uid: Date.now().toString(),
          fileName: file.name,
        })
      );
      if (onChange) {
        onChange(filesWithPreview);
      } else {
        setFiles((prev) =>
          multiple ? [...prev, ...filesWithPreview] : filesWithPreview
        );
      }
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    [accept, maxSize, multiple, onChange, onError, disabled]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if (disabled) return;
      e.preventDefault();
      e.stopPropagation();
    },
    [disabled]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      if (e.target.files) {
        handleFiles(Array.from(e.target.files));
      }
    },
    [handleFiles, disabled]
  );

  const handleClick = useCallback(() => {
    if (disabled) return;
    inputRef.current?.click();
  }, [disabled]);

  return (
    <div
      className={cn(
        "relative flex min-h-[100px] w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6 transition-colors",
        !disabled && "cursor-pointer hover:border-gray-400",
        disabled && "cursor-not-allowed opacity-50",
        !!noDrag &&
          "h-fit min-h-[unset] w-fit border-none p-0 hover:border-none",
        className
      )}
      {...(!noDrag && {
        onDrop: handleDrop,
        onDragOver: handleDragOver,
      })}
      onClick={handleClick}
    >
      <Input
        ref={inputRef}
        type="file"
        containerClassName="hidden"
        multiple={multiple}
        accept={accept}
        onChange={handleFileInput}
        disabled={disabled}
      />
      {children ? (
        <div>{children}</div>
      ) : (
        <div className="text-center">
          <p className="text-sm text-gray-600">
            {noDrag
              ? "Click to select files"
              : "Drag and drop files here, or click to select files"}
          </p>
        </div>
      )}
    </div>
  );
};

export { Upload };
