const projectArray = [];

function addProject() {
  const BranchItem = document.querySelector('.branch');
  const Branch = BranchItem.value;
  const TitleItem = document.querySelector('.titleinput');
  const Title = TitleItem.value;
  const ContentInput = document.querySelector('.contentinput');
  const Content = ContentInput.value;
  const ConclusionInput = document.querySelector('.conclusioninput');
  const Conclusion = ConclusionInput.value;
  const Group_members = document.querySelector('.groupMembers');
  const GroupMembers = Group_members.value;
  
  projectArray.push({
    Branch: Branch,
    Title: Title,
    Content: Content,
    Conclusion: Conclusion,
    GroupMembers: GroupMembers
  });

displayContent();
}

function displayContent() {

  let htmlContent = '';
   
  for(let i = 0; i < projectArray.length; i++) {
    const project = projectArray[i];
    const title = project.Title;
    const branch = project.Branch;
    const content = project.Content;
    const conclusion = project.Conclusion;
    const groupMembers = project.GroupMembers;
    const html = `<div class="card">
    <div class="share1"><span class="branch">Branch: ${branch}</span></div>
    <div class="card-header"><div class="h3 header">${title}</div>
    <div class="card-body">
    <span class="h6">Content:</span>${content}
    <div class="conclusion"><span class="h6">Conclusion</span>: ${conclusion}</div></div>
    <div class="card-footer">Group Members: ${groupMembers}</div>
    </div>
    </div>`

    htmlContent += html;
  }
console.log(htmlContent);
  
localStorage.setItem('YourContent',JSON.stringify(htmlContent));


}
