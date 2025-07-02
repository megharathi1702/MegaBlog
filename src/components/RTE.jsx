import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({
  name = 'content',
  control,
  label,
  defaultValue = ''
}) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block mb-1 font-medium">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value, ref } }) => (
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY} // or hard-code your key
            onInit={(evt, editor) => ref(editor.targetElm)}
            onEditorChange={onChange}
            value={value}
            id={name}
            init={{
              height: 400,
              menubar: true,
              plugins: [
                'advlist autolink lists link image charmap preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist outdent indent | removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
        )}
      />
    </div>
  );
}
