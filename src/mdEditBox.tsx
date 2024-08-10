import React from "react"
import MDEditor from '@uiw/react-md-editor'

export default function MD_EditBox() {
    const [value, setValue] = React.useState("**Hello world!!!**")
    const handleEditorChange = (newValue: string | undefined) => {
        if (newValue) {
            setValue(newValue)
        } else {
            setValue(``)
        }
    }
    return (
        <div className="container">
            <MDEditor
                visibleDragbar={false}
                height="100%"
                fullscreen={true}
                value={value}
                onChange={handleEditorChange}
            />
            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
    )
}