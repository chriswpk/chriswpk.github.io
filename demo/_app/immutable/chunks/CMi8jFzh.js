class s extends Phaser.Scene{constructor(){super("Boot")}preload(){this.load.image("logo","/assets/phaser/draggame/logo.png")}create(){this.scene.start("Preloader")}}export{s as default};
