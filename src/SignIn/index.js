import { Button, FormBox, FormInputRow, Layout } from "./style";


const SignIn =()=>{

    return (
      <Layout>
        <FormBox>
            <div className="inner">
                <h1>로그인</h1>
                <form>
                    <FormInputRow>
                        <label htmlFor="email">이메일</label>
                        <input type={"text"} id="email" placeholder="이메일을 입력해주세요" data-testid="email-input"/>
                    </FormInputRow>
                    <FormInputRow>
                        <label htmlFor="password">비밀번호</label>
                        <input type={"password"} id="password" placeholder="비밀번호를 입력해주세요" data-testid="password-input"/>
                    </FormInputRow>
                    <div className="btns_box">
                        <Button type={"button"} styletype="default" data-testid="signin-button">로그인</Button>
                        <Button type={"button"} styletype="white">회원가입</Button>
                    </div>
                </form>
            </div>
        </FormBox>
      </Layout>
    );
  }
  
export default SignIn;