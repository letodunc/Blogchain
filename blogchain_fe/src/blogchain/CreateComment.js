import { Grid, Form, Input } from 'semantic-ui-react'
import { useState } from 'react'
import { TxButton } from '../substrate-lib/components'


function CreateComment(props) {
    const [status, setStatus] = useState(null)
    const [formState, setFormState] = useState({ content: ''})
    const { postId } = props

    const onChange = (_, data) =>
        setFormState(prev => ({ ...prev, [data.state] : data.value }))

    const { content } = formState

    return (
        <Grid.Column width={8}>
            <h3>Create Comment</h3>
            <Form>
                <Form.Field>
                    <Input label="Content" type="text" placeholder="type here ..." state="content" onChange={onChange} value={content} />
                </Form.Field>
                <Form.Field>
                    <TxButton
                        label="Submit"
                        type="SIGNED-TX"
                        setStatus={setStatus}
                        attrs={{
                            palletRpc: 'blogchain',
                            callable: 'createBlogComment',
                            inputParams: [content, postId.toString()],
                            paramFields: [true, true]
                        }}
                    />
                </Form.Field>
                <div style={{ overflowWrap: 'break-word' }}>{status}</div>
            </Form>
        </Grid.Column>
    )
}

export default CreateComment