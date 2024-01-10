const components = VM.require("buildhub.near/widget/components")

console.log("components", components)

State.init({
  testConst: 0,
  changeThisConst: 1
})

function onChangeValue() {
  State.update({
    testConst: 9999
  })
} 

const StyledButton = styled.button`
  background: blue;

  :hover {
    background: gray;
    transition: all 0.3s ease;
  }
`

return (
  <StyledButton onClick={onChangeValue}>
    Click me {state.testConst}
  </StyledButton>
)