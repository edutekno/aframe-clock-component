  AFRAME.registerComponent('timer-component', {
  schema: {
    timerTime : {type:'int', default:10 },
    DigitsColor: {type: 'color', default: '#000"'},
  },
  stopthis: function(){
    console.log("stopped bro");
  },
  init: function () {
    

    var data = this.data;
    var el = this.el;
    this.paused= false;

    var date= new Date();
    this.TargetTime=new Date(date.getTime() + data.timerTime*1000);
     seconds = new THREE.Group();
     seconds.name="seconds"
   
     for(var j=0;j<2;j++)
     {
     distance = -j*0.25;
     parent1 = new THREE.Object3D();
     var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.3 );
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
     parent1.add(mesh1);
     parent1.position.x-=distance;
     parent1.position.y+=0.07;
     seconds.add(parent1);
    
     parent2 = new THREE.Object3D();
     var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.3 );
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
     parent2.add(mesh1);
     parent2.rotateZ(Math.PI/2);
     parent2.position.x-=(distance - 0.08);
     parent2.position.y+=0.14;
     seconds.add(parent2);

    parent3 = new THREE.Object3D();
     var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.3 );
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
     parent3.add(mesh1);
     parent3.position.x-=(distance - 0.16);
     parent3.position.y+=0.07;
     seconds.add(parent3);

     parent4 = new THREE.Object3D();
     var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.3);
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
     parent4.add(mesh1);
     parent4.rotateZ(Math.PI/2);
     parent4.position.x-=(distance - 0.08);
   
     seconds.add(parent4);


     parent5 = new THREE.Object3D();
     var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.2 );
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
     parent5.add(mesh1);
     parent5.rotateZ(Math.PI/2);
     parent5.position.x-=(distance - 0.08);
     parent5.position.y-=0.14;
    
     seconds.add(parent5);

     parent6 = new THREE.Object3D();
     var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.2 );
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
     parent6.add(mesh1);
     parent6.position.x-=(distance - 0.16);
     parent6.position.y-=0.07;
     
     seconds.add(parent6);

      parent7 = new THREE.Object3D();
      var SecGeo = new THREE.BoxGeometry( 0.025, 0.1, 0.2 );
     var SecMaterial = new THREE.MeshBasicMaterial( {color: this.data.DigitsColor} );
     var mesh1 = new THREE.Mesh( SecGeo, SecMaterial );
     parent7.add(mesh1);
     parent7.position.x-=distance;
     parent7.position.y-=0.07;
     
     seconds.add(parent7);
    
     }
  //  parent.add(seconds)
el.setObject3D('ClockMesh', seconds);
console.log(el.object3D);


  },
  tick : function()
  { 
    
    if(this.paused==false&& this.seconda!=0)
  {    this.GetTimeLeft();
       this.Setdigit();
         if(this.seconda==0)
      {
        this.TimeUp();
      }
   }
  
  }, pause: function () {
      this.paused=true;
       
  },
  play: function () {
    console.log("play called");
   if(this.paused)
    {
    this.TargetTime = new Date(new Date().getTime() + this.totalTimeRemaining);
    
    }
    this.paused=false;
  },
  Setdigit: function(){
   //console.log("INside Setdigit"+this.sec);
    var digitval= [[1,1,1,0,1,1,1],[0,0,1,0,0,1,0],[0,1,1,1,1,0,1],[0,1,1,1,1,1,0],[1,0,1,1,0,1,0],[1,1,0,1,1,1,0],[1,1,0,1,1,1,1],[0,1,1,0,0,1,0],[1,1,1,1,1,1,1],[1,1,1,1,0,1,0]];
   // console.log(seconds.children.length); 
    var k = Math.floor(this.seconda/10);
   // console.log("k :"+k);
    for(var a=0;a<7;a++) 
         { if(digitval[k][a]==1)
           seconds.children[a].visible=true;
           else
           seconds.children[a].visible=false;
        }
       var j = this.seconda%10;
      for(var i=7;i<14;i++) 
         { if(digitval[j][i-7]==1)
           seconds.children[i].visible=true;
           else
           seconds.children[i].visible=false;
        }

     

  },
  TimeUp: function(){
   alert("TIME UP");
  },
  GetTimeLeft:function(){
        let startDate = new Date();
    startDate = startDate.getTime();
    
    let timeRemaining = parseInt((this.TargetTime - startDate) / 1000);
    
    this.totalTimeRemaining=  timeRemaining*1000;
    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      
      this.houra = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      
      this.minutea = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      console.log("timeRemaining "+ timeRemaining);
     
      this.seconda = parseInt(timeRemaining);

      //console.log("days :"+days+" hours :"+this.houra+" minutes :"+this.minutea+" seconds :"+this.seconda);
    } 
    
  },
  remove: function () {
     console.log("removing");//removeObject3D('ClockMesh');
  },
    update: function (oldData) {
    var data = this.data;
    var el = this.el;
 
    // If `oldData` is empty, then this means we're in the initialization process.
    // No need to update.
  if (Object.keys(oldData).length === 0) { return; }
    console.log("update "+ data.DigitsColor);
    // Material-related properties changed. Update the material.
    if (data.DigitsColor !== oldData.DigitsColor) {
      console.log(" update "+ seconds.children[1].isObject3D+" "+ data.DigitsColor.toString(16).slice(-6) );
      //#4049bf
      var col= "0x"+data.DigitsColor.toString(16).slice(-6);
      for(var i=0;i<14;i++)
      {
        el.object3D.children[0].children[i].children[0].material.color.setHex(col);
      }
     // seconds.children[0].material.color.set( data.DigitsColor);
      //seconds.children[0].material = data.DigitsColor;
    }
  }
});
  