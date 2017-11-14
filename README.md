# Flag Freeze Tag
## A exercise in 'this' using a 'flag freeze tag' game

The rules of FFT are:

* There are two teams of players. One team is designated the 'runners' and the other the 'chasers'. There's also a flag in the game.
* Chasers can tag a runner and they become 'frozen'. You aren't allowed to tag anyone when you're frozen.
* Runners can tag other runners and they are no longer 'frozen'. Runners tagging chasers doesn't do anything and is considered a very risky play by freeze tag professionals.
* Chasers win when all runners are frozen. Runners win if one of the players picks up the flag.
* You should write some code to make it so that you can create teams of players and have them interact with each other.

## Part 1: creating your objects

There's a good bit of data here, and you should build a few different types of objects to help keep it organized. I'd recommend at least having:

* a Player type
* a Team type
* maybe a Flag type
**Put each of these constructors in their own module and export them.** These types should have *at least* the following functions:

``` javascript
// not actual code
Player.tag(player); // if the first is a chaser, the second player is frozen
                    // if the first and second players are runners, the second player is unfrozen
Player.getFlag();   // if the player is a runner, get the flag
Team.won();         // returns true if the team has won, or false if not (see rules above)
Team.add(player);   // add a player to the team
```

Create at least three js files that run different games of FFT. For example (don't use this), one file might be:

``` javascript
let a = new Player('Todd');
let b = new Player('Barb');
let c = new Player('Fitz');

let s = new Team('runners');
let t = new Team('chasers');

s.add(a);
s.add(b);
t.add(c);

s.won(); // false
t.won(); // false

c.tag(a);
a.frozen(); // true - this player was frozen by Fitz
// ... more stuff
```

## Hard mode: displaying data in the DOM

Render each team into a list in the DOM.

* Give the user controls (a text box and button, maybe?) to add players to each team.
* Add a 'freeze' and 'flag' button to each runner that modifies the underlying object.
* You should also have a 'winner?' button that adds information to the DOM indicating which team won (if any).

## Steps:

* Create two teams using constructors: 'Runners' and 'Chasers'.
* They will be similar but with a few key differences: 
    * when a "chaser" tags an *opponent*, they are frozen; tagging a teammate does nothing.
    * when a "runner" tags a teammate, they are unfrozen; tagging a "chaser" does nothing.

## Log:
### 'Let's Talk About `this` Baby...' or 'So, `this` is weird, right?'

### First of all, what is `this`?

This is a concept that is not unique to JavaScript. However, its behavior in JavaScript is apparently somewhat unique. `this` can be likened to a pronoun in the English language. A pronoun is a word that is substituted for a noun, like "Steve is running because *he* is late." In this example, we infer that 'he' refers to 'Steve' because we've already talked about Steve.

Likewise, `this` is defined by its context. And it is here where the metaphor gets a little difficult to follow, ~~since there are many ways to create an object in JavaScript, and `this` can behave a little differently, depending on which way you approach creation.~~

On second thought, I don't think this is true. I think the difficulty arises with how you *interact* with `this`. That is to say, if you try to interact with `this` outside of the context of the object it is bound to, things get a little more difficult. But I digress...

### Wait, pretend I'm five

In JS, functions are objects. First-class objects, if you want to get fancy. And as objects, functions also have properties. What makes functions fun (sorry) is that they can, of course, be called. When a function is called, or executed, it receives the `this` property (among many others). `this` always refers to an object.

### Which object does `this` refer to?

Generally speaking, `this` is used in a method (a function contained within an object). If the `this` that your referencing is not contained within an object, it still must refer to an object. Not being attached to any particular object, however, sets it adrift and thus `this` wanders in the desert, a tragic figure, a ronin. Wanting desperately to serve some master, `this` is associated with the window object, until a kinder, better master comes along.

```javascript
console.log(this === window) //true
```

See?

But if you access the value of `this` within the context of an object...

```javascript
let sandwich = {
  condiment: 'spicy brown mustard',
  meat: 'pastrami',
  bread: 'rye',
  cheese: 'swiss',
  info: function() {
    return this;
  }
}

console.log(sandwich.info()); //'sandwich' object
```

... you get the value of `this`, in this case, a sandwich worthy of a king!

This is `this` in a nutshell.

### But why?

Excellent question, my inquisitve friend!