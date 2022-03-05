class Sprite{
    constructor(title, id, name, image, type){
        this.title = title;
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type;
    }
}

var sprites = [
    new Sprite('Burst', 0, 'Burst', 'img/sprites/Burst.png', 'SpellSpeed'),
    new Sprite('Barrier', 1, 'Barrier', 'img/sprites/Barrier.png', 'Keyword'),
    new Sprite('Imbue', 2, 'Imbue', 'img/sprites/Imbue.png', 'Card Effect'),
    new Sprite('Scout', 3, 'Scout', 'img/sprites/Scout.png', 'Keyword'),
    new Sprite('Augment', 4, 'Augment', 'img/sprites/Augment.png', 'Keyword'),
    new Sprite('Level Up: Full', 5, 'ChampLevelUpIcon3', 'img/sprites/ChampLevelUpIcon3.png', 'Levelup'),    
    new Sprite('Aura', 6, 'Aura', 'img/sprites/Aura.png', 'Keyword'),
    new Sprite('Generic Trigger', 7, 'GenericTrigger', 'img/sprites/GenericTrigger.png', 'Card Effect'),
    new Sprite('Regeneration', 8, 'Regeneration', 'img/sprites/Regeneration.png', 'Keyword'),
    new Sprite('Spell Shield', 9, 'SpellShield', 'img/sprites/SpellShield.png', 'Keyword'),
    new Sprite('Level Up: Half', 10, 'ChampLevelUpIcon2', 'img/sprites/ChampLevelUpIcon2.png', 'Levelup'),
    new Sprite('Attune', 11, 'Attune', 'img/sprites/Attune.png', 'Keyword'),
    new Sprite('Frostbite', 12, 'Frostbite', 'img/sprites/Frostbite.png', 'Keyword'),
    new Sprite('Can\'t Block', 13, 'Reckless', 'img/sprites/Reckless.png', 'Keyword'),
    new Sprite('Fury', 14, 'Fury', 'img/sprites/Fury.png', 'Keyword'),
    new Sprite('Lurker', 15, 'Lurker', 'img/sprites/Lurker.png', 'Keyword'),
    new Sprite('Impact', 16, 'Impact', 'img/sprites/Impact.png', 'Keyword'),
    new Sprite('Impact: Empty', 17, 'ImpactB', 'img/sprites/ImpactB.png', 'Keyword'),
    new Sprite('Level Up: Empty', 18, 'ChampLevelUpIcon1', 'img/sprites/ChampLevelUpIcon1.png', 'Levelup'),
    new Sprite('Champion Wildcard', 19, 'champion', 'img/sprites/champion.png', 'Wildcard'),
    new Sprite('Fleeting', 20, 'Fleeting', 'img/sprites/Fleeting.png', 'Keyword'),
    new Sprite('Quick Attack', 21, 'QuickStrike', 'img/sprites/QuickStrike.png', 'Keyword'),
    new Sprite('Silenced', 22, 'Silenced', 'img/sprites/Silenced.png', 'Keyword'),
    new Sprite('Stunned', 23, 'Stunned', 'img/sprites/Stunned.png', 'Keyword'),
    new Sprite('Tough', 24, 'Tough', 'img/sprites/Tough.png', 'Keyword'),
    new Sprite('Vulnerable', 25, 'Vulnerable', 'img/sprites/Vulnerable.png', 'Keyword'),
    new Sprite('Bandle City', 26, 'BandleCity', 'img/sprites/BandleCity.png', 'Region'),
    new Sprite('Epic Wildcard', 27, 'epic', 'img/sprites/epic.png', 'Wildcard'),
    new Sprite('Fearsome', 28, 'Fearsome', 'img/sprites/Fearsome.png', 'Keyword'),
    new Sprite('Immobile', 29, 'Immobile', 'img/sprites/Immobile.png', 'Keyword'),
    new Sprite('Last Breath', 30, 'LastBreath', 'img/sprites/LastBreath.png', 'Keyword'),
    new Sprite('Lifesteal', 31, 'Lifesteal', 'img/sprites/Lifesteal.png', 'Keyword'),
    new Sprite('Overwhelm', 32, 'Overwhelm', 'img/sprites/Overwhelm.png', 'Keyword'),
    new Sprite('Skill Mark (Small)', 33, '', 'img/sprites/SkillMark.png', 'Card Effect'),
    new Sprite('Skill Mark (Regular)', 34, 'SkillMark', 'img/sprites/SkillMark.png', 'Card Effect'),
    new Sprite('Shurima', 35, 'Shurima', 'img/sprites/Shurima.png', 'Region'),
    new Sprite('Rare Wildcard', 36, 'rare', 'img/sprites/rare.png', 'Wildcard'),
    new Sprite('Capture', 37, 'Capture', 'img/sprites/Capture.png', 'Keyword'),
    new Sprite('Challenger', 38, 'Challenger', 'img/sprites/Challenger.png', 'Keyword'),
    new Sprite('Deep', 39, 'Deep', 'img/sprites/Deep.png', 'Keyword'),
    new Sprite('Double Attack', 40, 'DoubleStrike', 'img/sprites/DoubleStrike.png', 'Keyword'),
    new Sprite('Elusive', 41, 'Elusive', 'img/sprites/Elusive.png', 'Keyword'),
    new Sprite('Ephemeral', 42, 'Ephemeral', 'img/sprites/Ephemeral.png', 'Keyword'),
    new Sprite('Targon', 43, 'Targon', 'img/sprites/Targon.png', 'Region'),
    new Sprite('Fast', 44, 'Fast', 'img/sprites/Fast.png', 'SpellSpeed'),
    new Sprite('Slow', 45, 'Slow', 'img/sprites/Slow.png', 'SpellSpeed'),
    new Sprite('Focus', 46, 'Focus', 'img/sprites/Focus.png', 'SpellSpeed'),  
    new Sprite('Landmark', 47, 'LandmarkVisualOnly', 'img/sprites/LandmarkVisualOnly.png', 'Keyword'),
    new Sprite('Coin', 48, 'currency_bp', 'img/sprites/currency_bp.png', 'Currency'),
    new Sprite('Shards', 49, 'currency_shards', 'img/sprites/currency_shards.png', 'Currency'),
    new Sprite('Common Wildcard', 50, 'common', 'img/sprites/common.png', 'Wildcard'),
    new Sprite('Runeterra', 51, 'Neutral', 'img/sprites/Neutral.png', 'Region'),
    new Sprite('Bilgewater', 52, 'Bilgewater', 'img/sprites/Bilgewater.png', 'Region'),
    new Sprite('Demacia', 53, 'Demacia', 'img/sprites/Demacia.png', 'Region'),
    new Sprite('Freljord', 54, 'Freljord', 'img/sprites/Freljord.png', 'Region'),
    new Sprite('Ionia', 55, 'Ionia', 'img/sprites/Ionia.png', 'Region'),
    new Sprite('Noxus', 56, 'Noxus', 'img/sprites/Noxus.png', 'Region'),
    new Sprite('Piltover & Zaun', 57, 'PiltoverZaun', 'img/sprites/PiltoverZaun.png', 'Region'),
    new Sprite('Shadow Isles', 58, 'ShadowIsles', 'img/sprites/ShadowIsles.png', 'Region'),
    
    // Different spritesheets, which can not be adressed by ID.
    new Sprite('Fated', '', 'Fated', 'img/sprites/Fated.png', 'Keyword'),
    new Sprite('Formidable', '', 'Formidable', 'img/sprites/Formidable.png', 'Keyword'),
    new Sprite('Attach', '', 'Attach', 'img/sprites/Attach.png', 'Keyword'),
];
