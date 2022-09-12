describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerinfo with empty input', function (){
    serverNameInput.value = "";
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should update servertable', function () {
    submitServerInfo();
    updateServerTable();

    let serTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(serTdList.length).toEqual(3);
    expect(serTdList[0].innerText).toEqual('Alice');
    expect(serTdList[1].innerText).toEqual('$0.00');
    expect(serTdList[2].innerText).toEqual('Delete');
  });

  afterEach(function() {
    serverId=0;
    serverTbody.innerHTML = '';
    allServers ={};
  });
});
