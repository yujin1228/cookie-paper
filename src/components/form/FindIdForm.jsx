import { Form, FormGroup, Label, Input, Button } from '../../style/FormStyle';

export default function FindIdForm() {
    return(
    <Form>
        <FormGroup>
            <Label htmlFor="userEmail">이메일</Label>
            <Input id="userEmail" placeholder="이메일을 입력해주세요" 
            type="email" required/>
        </FormGroup>
        <Button $buttonActive={true}>이메일로 아이디 전송</Button>
    </Form>
    );
}