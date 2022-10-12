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
    new Sprite('Attach', 5, 'Attach', 'img/sprites/Attach.png', 'Keyword'),
    new Sprite('Level Up: Full', 6, 'ChampLevelUpIcon3', 'img/sprites/ChampLevelUpIcon3.png', 'Levelup'),    
    new Sprite('Aura', 7, 'Aura', 'img/sprites/Aura.png', 'Keyword'),
    new Sprite('Generic Trigger', 8, 'GenericTrigger', 'img/sprites/GenericTrigger.png', 'Card Effect'),
    new Sprite('Regeneration', 9, 'Regeneration', 'img/sprites/Regeneration.png', 'Keyword'),
    new Sprite('Spell Shield', 10, 'SpellShield', 'img/sprites/SpellShield.png', 'Keyword'),
    new Sprite('Fated', 11, 'Fated', 'img/sprites/Fated.png', 'Keyword'),
    new Sprite('Formidable', 12, 'Formidable', 'img/sprites/Formidable.png', 'Keyword'),
    new Sprite('Level Up: Half', 13, 'ChampLevelUpIcon2', 'img/sprites/ChampLevelUpIcon2.png', 'Levelup'),
    new Sprite('Attune', 14, 'Attune', 'img/sprites/Attune.png', 'Keyword'),
    new Sprite('Frostbite', 15, 'Frostbite', 'img/sprites/Frostbite.png', 'Keyword'),
    new Sprite('Can\'t Block', 16, 'Reckless', 'img/sprites/Reckless.png', 'Keyword'),
    new Sprite('Fury', 17, 'Fury', 'img/sprites/Fury.png', 'Keyword'),
    new Sprite('Lurker', 18, 'Lurker', 'img/sprites/Lurker.png', 'Keyword'),
    new Sprite('Impact', 19, 'Impact', 'img/sprites/Impact.png', 'Keyword'),
    new Sprite('Impact: Empty', 20, 'ImpactB', 'img/sprites/ImpactB.png', 'Keyword'),
    new Sprite('Level Up: Empty', 21, 'ChampLevelUpIcon1', 'img/sprites/ChampLevelUpIcon1.png', 'Levelup'),
    new Sprite('Champion Wildcard', 22, 'champion', 'img/sprites/champion.png', 'Wildcard'),
    new Sprite('Fleeting', 23, 'Fleeting', 'img/sprites/Fleeting.png', 'Keyword'),
    new Sprite('Quick Attack', 24, 'QuickStrike', 'img/sprites/QuickStrike.png', 'Keyword'),
    new Sprite('Silenced', 25, 'Silenced', 'img/sprites/Silenced.png', 'Keyword'),
    new Sprite('Stunned', 26, 'Stunned', 'img/sprites/Stunned.png', 'Keyword'),
    new Sprite('Tough', 27, 'Tough', 'img/sprites/Tough.png', 'Keyword'),
    new Sprite('Vulnerable', 28, 'Vulnerable', 'img/sprites/Vulnerable.png', 'Keyword'),
    new Sprite('Bandle City', 29, 'BandleCity', 'img/sprites/BandleCity.png', 'Region'),
    new Sprite('Epic Wildcard', 30, 'epic', 'img/sprites/epic.png', 'Wildcard'),
    new Sprite('Fearsome', 31, 'Fearsome', 'img/sprites/Fearsome.png', 'Keyword'),
    new Sprite('Immobile', 32, 'Immobile', 'img/sprites/Immobile.png', 'Keyword'),
    new Sprite('Last Breath', 33, 'LastBreath', 'img/sprites/LastBreath.png', 'Keyword'),
    new Sprite('Lifesteal', 34, 'Lifesteal', 'img/sprites/Lifesteal.png', 'Keyword'),
    new Sprite('Overwhelm', 35, 'Overwhelm', 'img/sprites/Overwhelm.png', 'Keyword'),
    new Sprite('Skill Mark (Small)', 36, '', 'img/sprites/SkillMark.png', 'Card Effect'),
    new Sprite('Skill Mark (Regular)', 37, 'SkillMark', 'img/sprites/SkillMark.png', 'Card Effect'),
    new Sprite('Shurima', 38, 'Shurima', 'img/sprites/Shurima.png', 'Region'),
    new Sprite('Rare Wildcard', 39, 'rare', 'img/sprites/rare.png', 'Wildcard'),
    new Sprite('Capture', 40, 'Capture', 'img/sprites/Capture.png', 'Keyword'),
    new Sprite('Challenger', 41, 'Challenger', 'img/sprites/Challenger.png', 'Keyword'),
    new Sprite('Deep', 42, 'Deep', 'img/sprites/Deep.png', 'Keyword'),
    new Sprite('Double Attack', 43, 'DoubleStrike', 'img/sprites/DoubleStrike.png', 'Keyword'),
    new Sprite('Elusive', 44, 'Elusive', 'img/sprites/Elusive.png', 'Keyword'),
    new Sprite('Ephemeral', 45, 'Ephemeral', 'img/sprites/Ephemeral.png', 'Keyword'),
    new Sprite('Targon', 46, 'Targon', 'img/sprites/Targon.png', 'Region'),
    new Sprite('Fast', 47, 'Fast', 'img/sprites/Fast.png', 'Type'),
    new Sprite('Slow', 48, 'Slow', 'img/sprites/Slow.png', 'Type'),
    new Sprite('Focus', 49, 'Focus', 'img/sprites/Focus.png', 'Type'),  
    new Sprite('Landmark', 50, 'LandmarkVisualOnly', 'img/sprites/LandmarkVisualOnly.png', 'Type'),
    new Sprite('Coin', 51, 'currency_bp', 'img/sprites/currency_bp.png', 'Currency'),
    new Sprite('Shards', 52, 'currency_shards', 'img/sprites/currency_shards.png', 'Currency'),
    new Sprite('Common Wildcard', 53, 'common', 'img/sprites/common.png', 'Wildcard'),
    new Sprite('Neutral', 54, 'Neutral', 'img/sprites/Neutral.png', 'Region'),
    new Sprite('Bilgewater', 55, 'Bilgewater', 'img/sprites/Bilgewater.png', 'Region'),
    new Sprite('Demacia', 56, 'Demacia', 'img/sprites/Demacia.png', 'Region'),
    new Sprite('Freljord', 57, 'Freljord', 'img/sprites/Freljord.png', 'Region'),
    new Sprite('Ionia', 58, 'Ionia', 'img/sprites/Ionia.png', 'Region'),
    new Sprite('Noxus', 59, 'Noxus', 'img/sprites/Noxus.png', 'Region'),
    new Sprite('Piltover & Zaun', 60, 'PiltoverZaun', 'img/sprites/PiltoverZaun.png', 'Region'),
    new Sprite('Shadow Isles', 61, 'ShadowIsles', 'img/sprites/ShadowIsles.png', 'Region'),
    
    // Different spritesheets, which can not be adressed by ID.
    new Sprite('Jhin', '', 'Jhin', 'img/sprites/Jhin.png', 'Region'),
    new Sprite('Bard', '', 'Bard', 'img/sprites/Bard.png', 'Region'),
    new Sprite('Runeterra', '', 'Runeterra', 'img/sprites/Runeterra.png', 'Region'),
    new Sprite('Invalid Deck', '', 'InvalidDeck', 'img/sprites/InvalidDeck.png', 'Info'),
    
    new Sprite('Hallowed', '', 'Hallowed', 'img/sprites/Hallowed.png', 'Keyword'),
    new Sprite('Evolve', '', 'Evolve', 'img/sprites/Evolve.png', 'Keyword'),
    new Sprite('Evelynn', '', 'Evelynn', 'img/sprites/Evelynn.png', 'Region'),
    
    new Sprite('Jax', '', 'Jax', 'img/sprites/Jax.png', 'Region'),
    new Sprite('Kayn', '', 'Kayn', 'img/sprites/Kayn.png', 'Region'),
    new Sprite('Equipment', '', 'Equipment', 'img/sprites/Equipment.png', 'Type'),
    
    new Sprite('Varus', '', 'Varus', 'img/sprites/Varus.png', 'Region'),
    
];
