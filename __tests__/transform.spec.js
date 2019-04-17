const fs = require('fs')
const gulp = require('gulp')
const gulpTransform = require('../lib/index')

let originPath = '/src/';
let distPath = '/dist/';
const parseTemplate = ()=>{
    opt = {}
    opt.path = '';
    gulp.src(`${__dirname}/${originPath}`+ opt.path + '**/*.html')
    .pipe(gulpTransform()).on('error',function (e) {
        console.error(chalk.red(e));
    })
    .pipe(gulp.dest(`${__dirname}/${distPath}`+ opt.path));
}
gulp.task('parseTemplate', parseTemplate);


describe("test gulpTransform", () => {
  test("test transform", () => {
    const expected = 
`<div class="u-search-user f-cb">
    <ux-search class="f-fl u-search" placeholder="{txtMap['placeholder']}" on-search="{this.search()}" value="{key}"></ux-search>
</div>

<div class="u-search-user-content">
    {#if !account || (account && account.status == -1) || (account && account.status == 2)}
    <div class="f-fl tips">
        {txtMap['searchEmpty']}
    </div>
    {/if}
    {#if account && account.status != -1 && account.status != 2}
    <div class="account-item f-cb">
        <div class="f-fl avatar">
            <img src="{account.largeFaceUrl || defaultAvatar}">
        </div>
        
        {#if !isCom}
        <div class="f-fl desc">
            <div class="title">昵称：{account.nickName}</div>
            <div class="email">{txtMap['name']}：{account.realName}</div>
        </div>
        {#else}
        <div class="f-fl desc">
            <div class="title">{txtMap['name']}：{account.realName}</div>
            <div class="email">员工编号：{account.idNum}</div>
        </div>
        {/if}

        <div class="f-fl oper">
            <span class="u-btn u-btn-sm u-btn-gh" r-class="{ {'u-btn-disabled': !!account.alreadyIn} }" on-click="{this.add(account)}">{#if !account.alreadyIn}确认添加{#else}已添加{/if}</span>
        </div>
    </div>
    {/if}
    {#if errorMsg}
    <div class="u-tip u-tip-error">{errorMsg}</div>
    {/if}
</div>`;

    parseTemplate()  

    const fileContent = fs.readFileSync(`${__dirname}${distPath}test.html`,'utf-8')
    expect(fileContent).toEqual(expected);
  });
});
