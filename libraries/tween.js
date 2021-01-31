export default class Tweener {
    constructor(data) {

        this.all = data;

        //Context
        this.context = data.context

        //Tween data
        this.target = data.target;
        this.duration = data.duration;
        this.attribs = data.attribs;
        this.ease = data.ease;

        //Tween status
        this.locked = data.locked;
        this.hidden = data.hidden;

        //Tween funcs
        this.onComplete = data.onComplete;
        this.onStart = data.onStart;
    }

    CreateTweenData(data) {
        let foo = {
            targets: data.target,
            duration: data.duration,
            ease: 'Circ',
            onStart: () => { 
                this.hidden = !this.hidden
                if (data.onStart) data.onStart(this) 
            },
            onComplete: () => {
                if (data.onComplete) data.onComplete(this);
            }
        }

        for (const obj of data.attribs)
            foo[obj.propertie] = this.hidden ? obj.hidden : obj.notHidden;

        return foo;
    }

    Toggle() {
        this.RestartAnimation()
    }

    ForceToggle() {
        console.log(this.locked)
        this.RestartAnimation(false)
    }

    RestartAnimation(condition = this.locked) {
        if (condition) return;
        this.Stop();
        this.animation = this.context.tweens.add(this.CreateTweenData(this.all))
    }

    ToggleLock() {
        this.RestartAnimation()
        this.locked = true;
    }

    Stop() {
        if (this.animation && this.animation.isPlaying()) {
            this.animation.stop();
        }
    }
}