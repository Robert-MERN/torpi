import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})


const TextEditor = () => {
    const [value, setValue] = useState('');
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [
                { list: 'bullet' },
                { list: 'ordered' },
            ],
            ['link'],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
    }

    return (
        <QuillNoSSRWrapper
            placeholder='Write a summary and any details your invitee should know about the event'
            modules={modules}
            theme="snow"
            value={value}
            onChange={setValue}
        />
    )
}

export default TextEditor