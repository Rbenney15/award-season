// server/data/oscars-2026.js
// Oscars 2026 ceremony nominees (text-first dataset).
// Structure: categories (ordered) + entities (global) + nominations (category-specific display).

const oscars2026 = {
  year: 2026,

  // Preserve Oscars.org order (as you pasted)
  categories: [
    {
      id: "actor_in_a_leading_role",
      name: "Actor in a Leading Role",
      type: "person",
      nominationIds: [
        "nom_actor_in_a_leading_role_timothee_chalamet_marty_supreme",
        "nom_actor_in_a_leading_role_leonardo_dicaprio_one_battle_after_another",
        "nom_actor_in_a_leading_role_ethan_hawke_blue_moon",
        "nom_actor_in_a_leading_role_michael_b_jordan_sinners",
        "nom_actor_in_a_leading_role_wagner_moura_the_secret_agent",
      ],
    },
    {
      id: "actor_in_a_supporting_role",
      name: "Actor in a Supporting Role",
      type: "person",
      nominationIds: [
        "nom_actor_in_a_supporting_role_benicio_del_toro_one_battle_after_another",
        "nom_actor_in_a_supporting_role_jacob_elordi_frankenstein",
        "nom_actor_in_a_supporting_role_delroy_lindo_sinners",
        "nom_actor_in_a_supporting_role_sean_penn_one_battle_after_another",
        "nom_actor_in_a_supporting_role_stellan_skarsgard_sentimental_value",
      ],
    },
    {
      id: "actress_in_a_leading_role",
      name: "Actress in a Leading Role",
      type: "person",
      nominationIds: [
        "nom_actress_in_a_leading_role_jessie_buckley_hamnet",
        "nom_actress_in_a_leading_role_rose_byrne_if_i_had_legs_id_kick_you",
        "nom_actress_in_a_leading_role_kate_hudson_song_sung_blue",
        "nom_actress_in_a_leading_role_renate_reinsve_sentimental_value",
        "nom_actress_in_a_leading_role_emma_stone_bugonia",
      ],
    },
    {
      id: "actress_in_a_supporting_role",
      name: "Actress in a Supporting Role",
      type: "person",
      nominationIds: [
        "nom_actress_in_a_supporting_role_elle_fanning_sentimental_value",
        "nom_actress_in_a_supporting_role_inga_ibsdotter_lilleaas_sentimental_value",
        "nom_actress_in_a_supporting_role_amy_madigan_weapons",
        "nom_actress_in_a_supporting_role_wunmi_mosaku_sinners",
        "nom_actress_in_a_supporting_role_teyana_taylor_one_battle_after_another",
      ],
    },
    {
      id: "animated_feature_film",
      name: "Animated Feature Film",
      type: "film",
      nominationIds: [
        "nom_animated_feature_film_arco",
        "nom_animated_feature_film_elio",
        "nom_animated_feature_film_kpop_demon_hunters",
        "nom_animated_feature_film_little_amelie_or_the_character_of_rain",
        "nom_animated_feature_film_zootopia_2",
      ],
    },
    {
      id: "animated_short_film",
      name: "Animated Short Film",
      type: "film",
      nominationIds: [
        "nom_animated_short_film_butterfly",
        "nom_animated_short_film_forevergreen",
        "nom_animated_short_film_the_girl_who_cried_pearls",
        "nom_animated_short_film_retirement_plan",
        "nom_animated_short_film_the_three_sisters",
      ],
    },
    {
      id: "casting",
      name: "Casting",
      type: "craft",
      nominationIds: [
        "nom_casting_hamnet_nina_gold",
        "nom_casting_marty_supreme_jennifer_venditti",
        "nom_casting_one_battle_after_another_cassandra_kulukundis",
        "nom_casting_the_secret_agent_gabriel_domingues",
        "nom_casting_sinners_francine_maisler",
      ],
    },
    {
      id: "cinematography",
      name: "Cinematography",
      type: "craft",
      nominationIds: [
        "nom_cinematography_frankenstein_dan_laustsen",
        "nom_cinematography_marty_supreme_darius_khondji",
        "nom_cinematography_one_battle_after_another_michael_bauman",
        "nom_cinematography_sinners_autumn_durald_arkapaw",
        "nom_cinematography_train_dreams_adolpho_veloso",
      ],
    },
    {
      id: "costume_design",
      name: "Costume Design",
      type: "craft",
      nominationIds: [
        "nom_costume_design_avatar_fire_and_ash_deborah_l_scott",
        "nom_costume_design_frankenstein_kate_hawley",
        "nom_costume_design_hamnet_malgosia_turzanska",
        "nom_costume_design_marty_supreme_miyako_bellizzi",
        "nom_costume_design_sinners_ruth_e_carter",
      ],
    },
    {
      id: "directing",
      name: "Directing",
      type: "person",
      nominationIds: [
        "nom_directing_hamnet_chloe_zhao",
        "nom_directing_marty_supreme_josh_safdie",
        "nom_directing_one_battle_after_another_paul_thomas_anderson",
        "nom_directing_sentimental_value_joachim_trier",
        "nom_directing_sinners_ryan_coogler",
      ],
    },
    {
      id: "documentary_feature_film",
      name: "Documentary Feature Film",
      type: "film",
      nominationIds: [
        "nom_documentary_feature_film_the_alabama_solution",
        "nom_documentary_feature_film_come_see_me_in_the_good_light",
        "nom_documentary_feature_film_cutting_through_rocks",
        "nom_documentary_feature_film_mr_nobody_against_putin",
        "nom_documentary_feature_film_the_perfect_neighbor",
      ],
    },
    {
      id: "documentary_short_film",
      name: "Documentary Short Film",
      type: "film",
      nominationIds: [
        "nom_documentary_short_film_all_the_empty_rooms",
        "nom_documentary_short_film_armed_only_with_a_camera_the_life_and_death_of_brent_renaud",
        "nom_documentary_short_film_children_no_more_were_and_are_gone",
        "nom_documentary_short_film_the_devil_is_busy",
        "nom_documentary_short_film_perfectly_a_strangeness",
      ],
    },
    {
      id: "film_editing",
      name: "Film Editing",
      type: "craft",
      nominationIds: [
        "nom_film_editing_f1_stephen_mirrione",
        "nom_film_editing_marty_supreme_ronald_bronstein_and_josh_safdie",
        "nom_film_editing_one_battle_after_another_andy_jurgensen",
        "nom_film_editing_sentimental_value_olivier_bugge_coutte",
        "nom_film_editing_sinners_michael_p_shawver",
      ],
    },
    {
      id: "international_feature_film",
      name: "International Feature Film",
      type: "film",
      nominationIds: [
        "nom_international_feature_film_brazil_the_secret_agent",
        "nom_international_feature_film_france_it_was_just_an_accident",
        "nom_international_feature_film_norway_sentimental_value",
        "nom_international_feature_film_spain_sirat",
        "nom_international_feature_film_tunisia_the_voice_of_hind_rajab",
      ],
    },
    {
      id: "live_action_short_film",
      name: "Live Action Short Film",
      type: "film",
      nominationIds: [
        "nom_live_action_short_film_butchers_stain",
        "nom_live_action_short_film_a_friend_of_dorothy",
        "nom_live_action_short_film_jane_austens_period_drama",
        "nom_live_action_short_film_the_singers",
        "nom_live_action_short_film_two_people_exchanging_saliva",
      ],
    },
    {
      id: "makeup_and_hairstyling",
      name: "Makeup and Hairstyling",
      type: "craft",
      nominationIds: [
        "nom_makeup_and_hairstyling_frankenstein_mike_hill_jordan_samuel_cliona_furey",
        "nom_makeup_and_hairstyling_kokuho_kyoko_toyokawa_naomi_hibino_tadashi_nishimatsu",
        "nom_makeup_and_hairstyling_sinners_ken_diaz_mike_fontaine_shunika_terry",
        "nom_makeup_and_hairstyling_the_smashing_machine_kazu_hiro_glen_griffin_bjoern_rehbein",
        "nom_makeup_and_hairstyling_the_ugly_stepsister_thomas_foldberg_anne_cathrine_sauerberg",
      ],
    },
    {
      id: "music_original_score",
      name: "Music (Original Score)",
      type: "craft",
      nominationIds: [
        "nom_music_original_score_bugonia_jerskin_fendrix",
        "nom_music_original_score_frankenstein_alexandre_desplat",
        "nom_music_original_score_hamnet_max_richter",
        "nom_music_original_score_one_battle_after_another_jonny_greenwood",
        "nom_music_original_score_sinners_ludwig_goransson",
      ],
    },
    {
      id: "music_original_song",
      name: "Music (Original Song)",
      type: "song",
      nominationIds: [
        "nom_music_original_song_dear_me_diane_warren_relentless",
        "nom_music_original_song_golden_kpop_demon_hunters",
        "nom_music_original_song_i_lied_to_you_sinners",
        "nom_music_original_song_sweet_dreams_of_joy_viva_verdi",
        "nom_music_original_song_train_dreams_train_dreams",
      ],
    },
    {
      id: "best_picture",
      name: "Best Picture",
      type: "film",
      nominationIds: [
        "nom_best_picture_bugonia",
        "nom_best_picture_f1",
        "nom_best_picture_frankenstein",
        "nom_best_picture_hamnet",
        "nom_best_picture_marty_supreme",
        "nom_best_picture_one_battle_after_another",
        "nom_best_picture_the_secret_agent",
        "nom_best_picture_sentimental_value",
        "nom_best_picture_sinners",
        "nom_best_picture_train_dreams",
      ],
    },
    {
      id: "production_design",
      name: "Production Design",
      type: "craft",
      nominationIds: [
        "nom_production_design_frankenstein_tamara_deverell_shane_vieau",
        "nom_production_design_hamnet_fiona_crombie_alice_felton",
        "nom_production_design_marty_supreme_jack_fisk_adam_willis",
        "nom_production_design_one_battle_after_another_florencia_martin_anthony_carlino",
        "nom_production_design_sinners_hannah_beachler_monique_champagne",
      ],
    },
    {
      id: "sound",
      name: "Sound",
      type: "craft",
      nominationIds: [
        "nom_sound_f1_gareth_john_al_nelson_gwendolyn_yates_whittle_gary_a_rizzo_juan_peralta",
        "nom_sound_frankenstein_greg_chapman_nathan_robitaille_nelson_ferreira_christian_cooke_brad_zoern",
        "nom_sound_one_battle_after_another_jose_antonio_garcia_christopher_scarabosio_tony_villaflor",
        "nom_sound_sinners_chris_welcker_benjamin_a_burtt_felipe_pacheco_brandon_proctor_steve_boeddeker",
        "nom_sound_sirat_amanda_villavieja_laia_casanovas_yasmina_praderas",
      ],
    },
    {
      id: "visual_effects",
      name: "Visual Effects",
      type: "craft",
      nominationIds: [
        "nom_visual_effects_avatar_fire_and_ash_joe_letteri_richard_baneham_eric_saindon_daniel_barrett",
        "nom_visual_effects_f1_ryan_tudhope_nicolas_chevallier_robert_harrington_keith_dawson",
        "nom_visual_effects_jurassic_world_rebirth_david_vickery_stephen_aplin_charmaine_chan_neil_corbould",
        "nom_visual_effects_the_lost_bus_charlie_noble_david_zaretti_russell_bowen_brandon_k_mclaughlin",
        "nom_visual_effects_sinners_michael_ralla_espen_nordahl_guido_wolter_donnie_dean",
      ],
    },
    {
      id: "writing_adapted_screenplay",
      name: "Writing (Adapted Screenplay)",
      type: "craft",
      nominationIds: [
        "nom_writing_adapted_screenplay_bugonia_will_tracy",
        "nom_writing_adapted_screenplay_frankenstein_guillermo_del_toro",
        "nom_writing_adapted_screenplay_hamnet_chloe_zhao_maggie_ofarrell",
        "nom_writing_adapted_screenplay_one_battle_after_another_paul_thomas_anderson",
        "nom_writing_adapted_screenplay_train_dreams_clint_bentley_greg_kwedar",
      ],
    },
    {
      id: "writing_original_screenplay",
      name: "Writing (Original Screenplay)",
      type: "craft",
      nominationIds: [
        "nom_writing_original_screenplay_blue_moon_robert_kaplow",
        "nom_writing_original_screenplay_it_was_just_an_accident_jafar_panahi_collaborators",
        "nom_writing_original_screenplay_marty_supreme_ronald_bronstein_josh_safdie",
        "nom_writing_original_screenplay_sentimental_value_eskil_vogt_joachim_trier",
        "nom_writing_original_screenplay_sinners_ryan_coogler",
      ],
    },
  ],

  // Global entities reused across categories
  entities: [
    // Movies / films
    { id: "entity_movie_marty_supreme", type: "movie", name: "Marty Supreme" },
    {
      id: "entity_movie_one_battle_after_another",
      type: "movie",
      name: "One Battle after Another",
    },
    { id: "entity_movie_blue_moon", type: "movie", name: "Blue Moon" },
    { id: "entity_movie_sinners", type: "movie", name: "Sinners" },
    {
      id: "entity_movie_the_secret_agent",
      type: "movie",
      name: "The Secret Agent",
    },
    { id: "entity_movie_frankenstein", type: "movie", name: "Frankenstein" },
    { id: "entity_movie_hamnet", type: "movie", name: "Hamnet" },
    { id: "entity_movie_bugonia", type: "movie", name: "Bugonia" },
    { id: "entity_movie_f1", type: "movie", name: "F1" },
    {
      id: "entity_movie_sentimental_value",
      type: "movie",
      name: "Sentimental Value",
    },
    { id: "entity_movie_train_dreams", type: "movie", name: "Train Dreams" },
    {
      id: "entity_movie_if_i_had_legs_id_kick_you",
      type: "movie",
      name: "If I Had Legs I'd Kick You",
    },
    {
      id: "entity_movie_song_sung_blue",
      type: "movie",
      name: "Song Sung Blue",
    },
    { id: "entity_movie_weapons", type: "movie", name: "Weapons" },

    { id: "entity_movie_arco", type: "movie", name: "Arco" },
    { id: "entity_movie_elio", type: "movie", name: "Elio" },
    {
      id: "entity_movie_kpop_demon_hunters",
      type: "movie",
      name: "KPop Demon Hunters",
    },
    {
      id: "entity_movie_little_amelie_or_the_character_of_rain",
      type: "movie",
      name: "Little Amélie or the Character of Rain",
    },
    { id: "entity_movie_zootopia_2", type: "movie", name: "Zootopia 2" },

    { id: "entity_movie_butterfly", type: "movie", name: "Butterfly" },
    { id: "entity_movie_forevergreen", type: "movie", name: "Forevergreen" },
    {
      id: "entity_movie_the_girl_who_cried_pearls",
      type: "movie",
      name: "The Girl Who Cried Pearls",
    },
    {
      id: "entity_movie_retirement_plan",
      type: "movie",
      name: "Retirement Plan",
    },
    {
      id: "entity_movie_the_three_sisters",
      type: "movie",
      name: "The Three Sisters",
    },

    {
      id: "entity_movie_avatar_fire_and_ash",
      type: "movie",
      name: "Avatar: Fire and Ash",
    },
    { id: "entity_movie_sirat", type: "movie", name: "Sirāt" },
    { id: "entity_movie_kokuho", type: "movie", name: "Kokuho" },
    {
      id: "entity_movie_the_smashing_machine",
      type: "movie",
      name: "The Smashing Machine",
    },
    {
      id: "entity_movie_the_ugly_stepsister",
      type: "movie",
      name: "The Ugly Stepsister",
    },

    {
      id: "entity_movie_the_alabama_solution",
      type: "movie",
      name: "The Alabama Solution",
    },
    {
      id: "entity_movie_come_see_me_in_the_good_light",
      type: "movie",
      name: "Come See Me in the Good Light",
    },
    {
      id: "entity_movie_cutting_through_rocks",
      type: "movie",
      name: "Cutting through Rocks",
    },
    {
      id: "entity_movie_mr_nobody_against_putin",
      type: "movie",
      name: "Mr. Nobody against Putin",
    },
    {
      id: "entity_movie_the_perfect_neighbor",
      type: "movie",
      name: "The Perfect Neighbor",
    },

    {
      id: "entity_movie_all_the_empty_rooms",
      type: "movie",
      name: "All the Empty Rooms",
    },
    {
      id: "entity_movie_armed_only_with_a_camera_the_life_and_death_of_brent_renaud",
      type: "movie",
      name: "Armed Only with a Camera: The Life and Death of Brent Renaud",
    },
    {
      id: "entity_movie_children_no_more_were_and_are_gone",
      type: "movie",
      name: 'Children No More: "Were and Are Gone"',
    },
    {
      id: "entity_movie_the_devil_is_busy",
      type: "movie",
      name: "The Devil Is Busy",
    },
    {
      id: "entity_movie_perfectly_a_strangeness",
      type: "movie",
      name: "Perfectly a Strangeness",
    },

    {
      id: "entity_movie_butchers_stain",
      type: "movie",
      name: "Butcher's Stain",
    },
    {
      id: "entity_movie_a_friend_of_dorothy",
      type: "movie",
      name: "A Friend of Dorothy",
    },
    {
      id: "entity_movie_jane_austens_period_drama",
      type: "movie",
      name: "Jane Austen's Period Drama",
    },
    { id: "entity_movie_the_singers", type: "movie", name: "The Singers" },
    {
      id: "entity_movie_two_people_exchanging_saliva",
      type: "movie",
      name: "Two People Exchanging Saliva",
    },

    {
      id: "entity_movie_diane_warren_relentless",
      type: "movie",
      name: "Diane Warren: Relentless",
    },
    { id: "entity_movie_viva_verdi", type: "movie", name: "Viva Verdi!" },

    {
      id: "entity_movie_jurassic_world_rebirth",
      type: "movie",
      name: "Jurassic World Rebirth",
    },
    { id: "entity_movie_the_lost_bus", type: "movie", name: "The Lost Bus" },

    {
      id: "entity_movie_it_was_just_an_accident",
      type: "movie",
      name: "It Was Just an Accident",
    },
    {
      id: "entity_movie_the_voice_of_hind_rajab",
      type: "movie",
      name: "The Voice of Hind Rajab",
    },

    // People
    {
      id: "entity_person_timothee_chalamet",
      type: "person",
      name: "Timothée Chalamet",
    },
    {
      id: "entity_person_leonardo_dicaprio",
      type: "person",
      name: "Leonardo DiCaprio",
    },
    { id: "entity_person_ethan_hawke", type: "person", name: "Ethan Hawke" },
    {
      id: "entity_person_michael_b_jordan",
      type: "person",
      name: "Michael B. Jordan",
    },
    { id: "entity_person_wagner_moura", type: "person", name: "Wagner Moura" },

    {
      id: "entity_person_benicio_del_toro",
      type: "person",
      name: "Benicio Del Toro",
    },
    { id: "entity_person_jacob_elordi", type: "person", name: "Jacob Elordi" },
    { id: "entity_person_delroy_lindo", type: "person", name: "Delroy Lindo" },
    { id: "entity_person_sean_penn", type: "person", name: "Sean Penn" },
    {
      id: "entity_person_stellan_skarsgard",
      type: "person",
      name: "Stellan Skarsgård",
    },

    {
      id: "entity_person_jessie_buckley",
      type: "person",
      name: "Jessie Buckley",
    },
    { id: "entity_person_rose_byrne", type: "person", name: "Rose Byrne" },
    { id: "entity_person_kate_hudson", type: "person", name: "Kate Hudson" },
    {
      id: "entity_person_renate_reinsve",
      type: "person",
      name: "Renate Reinsve",
    },
    { id: "entity_person_emma_stone", type: "person", name: "Emma Stone" },

    { id: "entity_person_elle_fanning", type: "person", name: "Elle Fanning" },
    {
      id: "entity_person_inga_ibsdotter_lilleaas",
      type: "person",
      name: "Inga Ibsdotter Lilleaas",
    },
    { id: "entity_person_amy_madigan", type: "person", name: "Amy Madigan" },
    { id: "entity_person_wunmi_mosaku", type: "person", name: "Wunmi Mosaku" },
    {
      id: "entity_person_teyana_taylor",
      type: "person",
      name: "Teyana Taylor",
    },

    // Songs
    { id: "entity_song_dear_me", type: "song", name: "Dear Me" },
    { id: "entity_song_golden", type: "song", name: "Golden" },
    { id: "entity_song_i_lied_to_you", type: "song", name: "I Lied To You" },
    {
      id: "entity_song_sweet_dreams_of_joy",
      type: "song",
      name: "Sweet Dreams Of Joy",
    },
    { id: "entity_song_train_dreams", type: "song", name: "Train Dreams" },
  ],

  // Nominations include category display context.
  nominations: [
    // Actor in a Leading Role
    {
      id: "nom_actor_in_a_leading_role_timothee_chalamet_marty_supreme",
      categoryId: "actor_in_a_leading_role",
      entityId: "entity_person_timothee_chalamet",
      display: { primary: "Timothée Chalamet", secondary: "Marty Supreme" },
    },
    {
      id: "nom_actor_in_a_leading_role_leonardo_dicaprio_one_battle_after_another",
      categoryId: "actor_in_a_leading_role",
      entityId: "entity_person_leonardo_dicaprio",
      display: {
        primary: "Leonardo DiCaprio",
        secondary: "One Battle after Another",
      },
    },
    {
      id: "nom_actor_in_a_leading_role_ethan_hawke_blue_moon",
      categoryId: "actor_in_a_leading_role",
      entityId: "entity_person_ethan_hawke",
      display: { primary: "Ethan Hawke", secondary: "Blue Moon" },
    },
    {
      id: "nom_actor_in_a_leading_role_michael_b_jordan_sinners",
      categoryId: "actor_in_a_leading_role",
      entityId: "entity_person_michael_b_jordan",
      display: { primary: "Michael B. Jordan", secondary: "Sinners" },
    },
    {
      id: "nom_actor_in_a_leading_role_wagner_moura_the_secret_agent",
      categoryId: "actor_in_a_leading_role",
      entityId: "entity_person_wagner_moura",
      display: { primary: "Wagner Moura", secondary: "The Secret Agent" },
    },

    // Actor in a Supporting Role
    {
      id: "nom_actor_in_a_supporting_role_benicio_del_toro_one_battle_after_another",
      categoryId: "actor_in_a_supporting_role",
      entityId: "entity_person_benicio_del_toro",
      display: {
        primary: "Benicio Del Toro",
        secondary: "One Battle after Another",
      },
    },
    {
      id: "nom_actor_in_a_supporting_role_jacob_elordi_frankenstein",
      categoryId: "actor_in_a_supporting_role",
      entityId: "entity_person_jacob_elordi",
      display: { primary: "Jacob Elordi", secondary: "Frankenstein" },
    },
    {
      id: "nom_actor_in_a_supporting_role_delroy_lindo_sinners",
      categoryId: "actor_in_a_supporting_role",
      entityId: "entity_person_delroy_lindo",
      display: { primary: "Delroy Lindo", secondary: "Sinners" },
    },
    {
      id: "nom_actor_in_a_supporting_role_sean_penn_one_battle_after_another",
      categoryId: "actor_in_a_supporting_role",
      entityId: "entity_person_sean_penn",
      display: { primary: "Sean Penn", secondary: "One Battle after Another" },
    },
    {
      id: "nom_actor_in_a_supporting_role_stellan_skarsgard_sentimental_value",
      categoryId: "actor_in_a_supporting_role",
      entityId: "entity_person_stellan_skarsgard",
      display: { primary: "Stellan Skarsgård", secondary: "Sentimental Value" },
    },

    // Actress in a Leading Role
    {
      id: "nom_actress_in_a_leading_role_jessie_buckley_hamnet",
      categoryId: "actress_in_a_leading_role",
      entityId: "entity_person_jessie_buckley",
      display: { primary: "Jessie Buckley", secondary: "Hamnet" },
    },
    {
      id: "nom_actress_in_a_leading_role_rose_byrne_if_i_had_legs_id_kick_you",
      categoryId: "actress_in_a_leading_role",
      entityId: "entity_person_rose_byrne",
      display: {
        primary: "Rose Byrne",
        secondary: "If I Had Legs I'd Kick You",
      },
    },
    {
      id: "nom_actress_in_a_leading_role_kate_hudson_song_sung_blue",
      categoryId: "actress_in_a_leading_role",
      entityId: "entity_person_kate_hudson",
      display: { primary: "Kate Hudson", secondary: "Song Sung Blue" },
    },
    {
      id: "nom_actress_in_a_leading_role_renate_reinsve_sentimental_value",
      categoryId: "actress_in_a_leading_role",
      entityId: "entity_person_renate_reinsve",
      display: { primary: "Renate Reinsve", secondary: "Sentimental Value" },
    },
    {
      id: "nom_actress_in_a_leading_role_emma_stone_bugonia",
      categoryId: "actress_in_a_leading_role",
      entityId: "entity_person_emma_stone",
      display: { primary: "Emma Stone", secondary: "Bugonia" },
    },

    // Actress in a Supporting Role
    {
      id: "nom_actress_in_a_supporting_role_elle_fanning_sentimental_value",
      categoryId: "actress_in_a_supporting_role",
      entityId: "entity_person_elle_fanning",
      display: { primary: "Elle Fanning", secondary: "Sentimental Value" },
    },
    {
      id: "nom_actress_in_a_supporting_role_inga_ibsdotter_lilleaas_sentimental_value",
      categoryId: "actress_in_a_supporting_role",
      entityId: "entity_person_inga_ibsdotter_lilleaas",
      display: {
        primary: "Inga Ibsdotter Lilleaas",
        secondary: "Sentimental Value",
      },
    },
    {
      id: "nom_actress_in_a_supporting_role_amy_madigan_weapons",
      categoryId: "actress_in_a_supporting_role",
      entityId: "entity_person_amy_madigan",
      display: { primary: "Amy Madigan", secondary: "Weapons" },
    },
    {
      id: "nom_actress_in_a_supporting_role_wunmi_mosaku_sinners",
      categoryId: "actress_in_a_supporting_role",
      entityId: "entity_person_wunmi_mosaku",
      display: { primary: "Wunmi Mosaku", secondary: "Sinners" },
    },
    {
      id: "nom_actress_in_a_supporting_role_teyana_taylor_one_battle_after_another",
      categoryId: "actress_in_a_supporting_role",
      entityId: "entity_person_teyana_taylor",
      display: {
        primary: "Teyana Taylor",
        secondary: "One Battle after Another",
      },
    },

    // Animated Feature Film (secondary = credits line)
    {
      id: "nom_animated_feature_film_arco",
      categoryId: "animated_feature_film",
      entityId: "entity_movie_arco",
      display: {
        primary: "Arco",
        secondary:
          "Ugo Bienvenu, Félix de Givry, Sophie Mas and Natalie Portman",
      },
    },
    {
      id: "nom_animated_feature_film_elio",
      categoryId: "animated_feature_film",
      entityId: "entity_movie_elio",
      display: {
        primary: "Elio",
        secondary:
          "Madeline Sharafian, Domee Shi, Adrian Molina and Mary Alice Drumm",
      },
    },
    {
      id: "nom_animated_feature_film_kpop_demon_hunters",
      categoryId: "animated_feature_film",
      entityId: "entity_movie_kpop_demon_hunters",
      display: {
        primary: "KPop Demon Hunters",
        secondary: "Maggie Kang, Chris Appelhans and Michelle L.M. Wong",
      },
    },
    {
      id: "nom_animated_feature_film_little_amelie_or_the_character_of_rain",
      categoryId: "animated_feature_film",
      entityId: "entity_movie_little_amelie_or_the_character_of_rain",
      display: {
        primary: "Little Amélie or the Character of Rain",
        secondary:
          "Maïlys Vallade, Liane-Cho Han, Nidia Santiago and Henri Magalon",
      },
    },
    {
      id: "nom_animated_feature_film_zootopia_2",
      categoryId: "animated_feature_film",
      entityId: "entity_movie_zootopia_2",
      display: {
        primary: "Zootopia 2",
        secondary: "Jared Bush, Byron Howard and Yvett Merino",
      },
    },

    // Animated Short Film (secondary = creators)
    {
      id: "nom_animated_short_film_butterfly",
      categoryId: "animated_short_film",
      entityId: "entity_movie_butterfly",
      display: {
        primary: "Butterfly",
        secondary: "Florence Miailhe and Ron Dyens",
      },
    },
    {
      id: "nom_animated_short_film_forevergreen",
      categoryId: "animated_short_film",
      entityId: "entity_movie_forevergreen",
      display: {
        primary: "Forevergreen",
        secondary: "Nathan Engelhardt and Jeremy Spears",
      },
    },
    {
      id: "nom_animated_short_film_the_girl_who_cried_pearls",
      categoryId: "animated_short_film",
      entityId: "entity_movie_the_girl_who_cried_pearls",
      display: {
        primary: "The Girl Who Cried Pearls",
        secondary: "Chris Lavis and Maciek Szczerbowski",
      },
    },
    {
      id: "nom_animated_short_film_retirement_plan",
      categoryId: "animated_short_film",
      entityId: "entity_movie_retirement_plan",
      display: {
        primary: "Retirement Plan",
        secondary: "John Kelly and Andrew Freedman",
      },
    },
    {
      id: "nom_animated_short_film_the_three_sisters",
      categoryId: "animated_short_film",
      entityId: "entity_movie_the_three_sisters",
      display: {
        primary: "The Three Sisters",
        secondary: "Konstantin Bronzit",
      },
    },

    // Casting
    {
      id: "nom_casting_hamnet_nina_gold",
      categoryId: "casting",
      entityId: "entity_movie_hamnet",
      display: { primary: "Hamnet", secondary: "Nina Gold" },
    },
    {
      id: "nom_casting_marty_supreme_jennifer_venditti",
      categoryId: "casting",
      entityId: "entity_movie_marty_supreme",
      display: { primary: "Marty Supreme", secondary: "Jennifer Venditti" },
    },
    {
      id: "nom_casting_one_battle_after_another_cassandra_kulukundis",
      categoryId: "casting",
      entityId: "entity_movie_one_battle_after_another",
      display: {
        primary: "One Battle after Another",
        secondary: "Cassandra Kulukundis",
      },
    },
    {
      id: "nom_casting_the_secret_agent_gabriel_domingues",
      categoryId: "casting",
      entityId: "entity_movie_the_secret_agent",
      display: { primary: "The Secret Agent", secondary: "Gabriel Domingues" },
    },
    {
      id: "nom_casting_sinners_francine_maisler",
      categoryId: "casting",
      entityId: "entity_movie_sinners",
      display: { primary: "Sinners", secondary: "Francine Maisler" },
    },

    // Cinematography
    {
      id: "nom_cinematography_frankenstein_dan_laustsen",
      categoryId: "cinematography",
      entityId: "entity_movie_frankenstein",
      display: { primary: "Frankenstein", secondary: "Dan Laustsen" },
    },
    {
      id: "nom_cinematography_marty_supreme_darius_khondji",
      categoryId: "cinematography",
      entityId: "entity_movie_marty_supreme",
      display: { primary: "Marty Supreme", secondary: "Darius Khondji" },
    },
    {
      id: "nom_cinematography_one_battle_after_another_michael_bauman",
      categoryId: "cinematography",
      entityId: "entity_movie_one_battle_after_another",
      display: {
        primary: "One Battle after Another",
        secondary: "Michael Bauman",
      },
    },
    {
      id: "nom_cinematography_sinners_autumn_durald_arkapaw",
      categoryId: "cinematography",
      entityId: "entity_movie_sinners",
      display: { primary: "Sinners", secondary: "Autumn Durald Arkapaw" },
    },
    {
      id: "nom_cinematography_train_dreams_adolpho_veloso",
      categoryId: "cinematography",
      entityId: "entity_movie_train_dreams",
      display: { primary: "Train Dreams", secondary: "Adolpho Veloso" },
    },

    // Costume Design
    {
      id: "nom_costume_design_avatar_fire_and_ash_deborah_l_scott",
      categoryId: "costume_design",
      entityId: "entity_movie_avatar_fire_and_ash",
      display: {
        primary: "Avatar: Fire and Ash",
        secondary: "Deborah L. Scott",
      },
    },
    {
      id: "nom_costume_design_frankenstein_kate_hawley",
      categoryId: "costume_design",
      entityId: "entity_movie_frankenstein",
      display: { primary: "Frankenstein", secondary: "Kate Hawley" },
    },
    {
      id: "nom_costume_design_hamnet_malgosia_turzanska",
      categoryId: "costume_design",
      entityId: "entity_movie_hamnet",
      display: { primary: "Hamnet", secondary: "Malgosia Turzanska" },
    },
    {
      id: "nom_costume_design_marty_supreme_miyako_bellizzi",
      categoryId: "costume_design",
      entityId: "entity_movie_marty_supreme",
      display: { primary: "Marty Supreme", secondary: "Miyako Bellizzi" },
    },
    {
      id: "nom_costume_design_sinners_ruth_e_carter",
      categoryId: "costume_design",
      entityId: "entity_movie_sinners",
      display: { primary: "Sinners", secondary: "Ruth E. Carter" },
    },

    // Directing (film primary, person secondary)
    {
      id: "nom_directing_hamnet_chloe_zhao",
      categoryId: "directing",
      entityId: "entity_movie_hamnet",
      display: { primary: "Hamnet", secondary: "Chloé Zhao" },
    },
    {
      id: "nom_directing_marty_supreme_josh_safdie",
      categoryId: "directing",
      entityId: "entity_movie_marty_supreme",
      display: { primary: "Marty Supreme", secondary: "Josh Safdie" },
    },
    {
      id: "nom_directing_one_battle_after_another_paul_thomas_anderson",
      categoryId: "directing",
      entityId: "entity_movie_one_battle_after_another",
      display: {
        primary: "One Battle after Another",
        secondary: "Paul Thomas Anderson",
      },
    },
    {
      id: "nom_directing_sentimental_value_joachim_trier",
      categoryId: "directing",
      entityId: "entity_movie_sentimental_value",
      display: { primary: "Sentimental Value", secondary: "Joachim Trier" },
    },
    {
      id: "nom_directing_sinners_ryan_coogler",
      categoryId: "directing",
      entityId: "entity_movie_sinners",
      display: { primary: "Sinners", secondary: "Ryan Coogler" },
    },

    // Documentary Feature Film (secondary = producers)
    {
      id: "nom_documentary_feature_film_the_alabama_solution",
      categoryId: "documentary_feature_film",
      entityId: "entity_movie_the_alabama_solution",
      display: {
        primary: "The Alabama Solution",
        secondary: "Andrew Jarecki and Charlotte Kaufman",
      },
    },
    {
      id: "nom_documentary_feature_film_come_see_me_in_the_good_light",
      categoryId: "documentary_feature_film",
      entityId: "entity_movie_come_see_me_in_the_good_light",
      display: {
        primary: "Come See Me in the Good Light",
        secondary: "Ryan White, Jessica Hargrave, Tig Notaro and Stef Willen",
      },
    },
    {
      id: "nom_documentary_feature_film_cutting_through_rocks",
      categoryId: "documentary_feature_film",
      entityId: "entity_movie_cutting_through_rocks",
      display: {
        primary: "Cutting through Rocks",
        secondary: "Sara Khaki and Mohammadreza Eyni",
      },
    },
    {
      id: "nom_documentary_feature_film_mr_nobody_against_putin",
      categoryId: "documentary_feature_film",
      entityId: "entity_movie_mr_nobody_against_putin",
      display: {
        primary: "Mr. Nobody against Putin",
        secondary:
          "David Borenstein, Pavel Talankin, Helle Faber and Alžběta Karásková",
      },
    },
    {
      id: "nom_documentary_feature_film_the_perfect_neighbor",
      categoryId: "documentary_feature_film",
      entityId: "entity_movie_the_perfect_neighbor",
      display: {
        primary: "The Perfect Neighbor",
        secondary: "Geeta Gandbhir, Alisa Payne, Nikon Kwantu and Sam Bisbee",
      },
    },

    // Documentary Short Film (secondary = creators)
    {
      id: "nom_documentary_short_film_all_the_empty_rooms",
      categoryId: "documentary_short_film",
      entityId: "entity_movie_all_the_empty_rooms",
      display: {
        primary: "All the Empty Rooms",
        secondary: "Joshua Seftel and Conall Jones",
      },
    },
    {
      id: "nom_documentary_short_film_armed_only_with_a_camera_the_life_and_death_of_brent_renaud",
      categoryId: "documentary_short_film",
      entityId:
        "entity_movie_armed_only_with_a_camera_the_life_and_death_of_brent_renaud",
      display: {
        primary: "Armed Only with a Camera: The Life and Death of Brent Renaud",
        secondary: "Craig Renaud and Juan Arredondo",
      },
    },
    {
      id: "nom_documentary_short_film_children_no_more_were_and_are_gone",
      categoryId: "documentary_short_film",
      entityId: "entity_movie_children_no_more_were_and_are_gone",
      display: {
        primary: 'Children No More: "Were and Are Gone"',
        secondary: "Hilla Medalia and Sheila Nevins",
      },
    },
    {
      id: "nom_documentary_short_film_the_devil_is_busy",
      categoryId: "documentary_short_film",
      entityId: "entity_movie_the_devil_is_busy",
      display: {
        primary: "The Devil Is Busy",
        secondary: "Christalyn Hampton and Geeta Gandbhir",
      },
    },
    {
      id: "nom_documentary_short_film_perfectly_a_strangeness",
      categoryId: "documentary_short_film",
      entityId: "entity_movie_perfectly_a_strangeness",
      display: {
        primary: "Perfectly a Strangeness",
        secondary: "Alison McAlpine",
      },
    },

    // Film Editing
    {
      id: "nom_film_editing_f1_stephen_mirrione",
      categoryId: "film_editing",
      entityId: "entity_movie_f1",
      display: { primary: "F1", secondary: "Stephen Mirrione" },
    },
    {
      id: "nom_film_editing_marty_supreme_ronald_bronstein_and_josh_safdie",
      categoryId: "film_editing",
      entityId: "entity_movie_marty_supreme",
      display: {
        primary: "Marty Supreme",
        secondary: "Ronald Bronstein and Josh Safdie",
      },
    },
    {
      id: "nom_film_editing_one_battle_after_another_andy_jurgensen",
      categoryId: "film_editing",
      entityId: "entity_movie_one_battle_after_another",
      display: {
        primary: "One Battle after Another",
        secondary: "Andy Jurgensen",
      },
    },
    {
      id: "nom_film_editing_sentimental_value_olivier_bugge_coutte",
      categoryId: "film_editing",
      entityId: "entity_movie_sentimental_value",
      display: {
        primary: "Sentimental Value",
        secondary: "Olivier Bugge Coutté",
      },
    },
    {
      id: "nom_film_editing_sinners_michael_p_shawver",
      categoryId: "film_editing",
      entityId: "entity_movie_sinners",
      display: { primary: "Sinners", secondary: "Michael P. Shawver" },
    },

    // International Feature Film (primary = film, secondary = country)
    {
      id: "nom_international_feature_film_brazil_the_secret_agent",
      categoryId: "international_feature_film",
      entityId: "entity_movie_the_secret_agent",
      display: { primary: "The Secret Agent", secondary: "Brazil" },
    },
    {
      id: "nom_international_feature_film_france_it_was_just_an_accident",
      categoryId: "international_feature_film",
      entityId: "entity_movie_it_was_just_an_accident",
      display: { primary: "It Was Just an Accident", secondary: "France" },
    },
    {
      id: "nom_international_feature_film_norway_sentimental_value",
      categoryId: "international_feature_film",
      entityId: "entity_movie_sentimental_value",
      display: { primary: "Sentimental Value", secondary: "Norway" },
    },
    {
      id: "nom_international_feature_film_spain_sirat",
      categoryId: "international_feature_film",
      entityId: "entity_movie_sirat",
      display: { primary: "Sirāt", secondary: "Spain" },
    },
    {
      id: "nom_international_feature_film_tunisia_the_voice_of_hind_rajab",
      categoryId: "international_feature_film",
      entityId: "entity_movie_the_voice_of_hind_rajab",
      display: { primary: "The Voice of Hind Rajab", secondary: "Tunisia" },
    },

    // Live Action Short Film (secondary = creators)
    {
      id: "nom_live_action_short_film_butchers_stain",
      categoryId: "live_action_short_film",
      entityId: "entity_movie_butchers_stain",
      display: {
        primary: "Butcher's Stain",
        secondary: "Meyer Levinson-Blount and Oron Caspi",
      },
    },
    {
      id: "nom_live_action_short_film_a_friend_of_dorothy",
      categoryId: "live_action_short_film",
      entityId: "entity_movie_a_friend_of_dorothy",
      display: {
        primary: "A Friend of Dorothy",
        secondary: "Lee Knight and James Dean",
      },
    },
    {
      id: "nom_live_action_short_film_jane_austens_period_drama",
      categoryId: "live_action_short_film",
      entityId: "entity_movie_jane_austens_period_drama",
      display: {
        primary: "Jane Austen's Period Drama",
        secondary: "Julia Aks and Steve Pinder",
      },
    },
    {
      id: "nom_live_action_short_film_the_singers",
      categoryId: "live_action_short_film",
      entityId: "entity_movie_the_singers",
      display: {
        primary: "The Singers",
        secondary: "Sam A. Davis and Jack Piatt",
      },
    },
    {
      id: "nom_live_action_short_film_two_people_exchanging_saliva",
      categoryId: "live_action_short_film",
      entityId: "entity_movie_two_people_exchanging_saliva",
      display: {
        primary: "Two People Exchanging Saliva",
        secondary: "Alexandre Singh and Natalie Musteata",
      },
    },

    // Makeup and Hairstyling
    {
      id: "nom_makeup_and_hairstyling_frankenstein_mike_hill_jordan_samuel_cliona_furey",
      categoryId: "makeup_and_hairstyling",
      entityId: "entity_movie_frankenstein",
      display: {
        primary: "Frankenstein",
        secondary: "Mike Hill, Jordan Samuel and Cliona Furey",
      },
    },
    {
      id: "nom_makeup_and_hairstyling_kokuho_kyoko_toyokawa_naomi_hibino_tadashi_nishimatsu",
      categoryId: "makeup_and_hairstyling",
      entityId: "entity_movie_kokuho",
      display: {
        primary: "Kokuho",
        secondary: "Kyoko Toyokawa, Naomi Hibino and Tadashi Nishimatsu",
      },
    },
    {
      id: "nom_makeup_and_hairstyling_sinners_ken_diaz_mike_fontaine_shunika_terry",
      categoryId: "makeup_and_hairstyling",
      entityId: "entity_movie_sinners",
      display: {
        primary: "Sinners",
        secondary: "Ken Diaz, Mike Fontaine and Shunika Terry",
      },
    },
    {
      id: "nom_makeup_and_hairstyling_the_smashing_machine_kazu_hiro_glen_griffin_bjoern_rehbein",
      categoryId: "makeup_and_hairstyling",
      entityId: "entity_movie_the_smashing_machine",
      display: {
        primary: "The Smashing Machine",
        secondary: "Kazu Hiro, Glen Griffin and Bjoern Rehbein",
      },
    },
    {
      id: "nom_makeup_and_hairstyling_the_ugly_stepsister_thomas_foldberg_anne_cathrine_sauerberg",
      categoryId: "makeup_and_hairstyling",
      entityId: "entity_movie_the_ugly_stepsister",
      display: {
        primary: "The Ugly Stepsister",
        secondary: "Thomas Foldberg and Anne Cathrine Sauerberg",
      },
    },

    // Music (Original Score)
    {
      id: "nom_music_original_score_bugonia_jerskin_fendrix",
      categoryId: "music_original_score",
      entityId: "entity_movie_bugonia",
      display: { primary: "Bugonia", secondary: "Jerskin Fendrix" },
    },
    {
      id: "nom_music_original_score_frankenstein_alexandre_desplat",
      categoryId: "music_original_score",
      entityId: "entity_movie_frankenstein",
      display: { primary: "Frankenstein", secondary: "Alexandre Desplat" },
    },
    {
      id: "nom_music_original_score_hamnet_max_richter",
      categoryId: "music_original_score",
      entityId: "entity_movie_hamnet",
      display: { primary: "Hamnet", secondary: "Max Richter" },
    },
    {
      id: "nom_music_original_score_one_battle_after_another_jonny_greenwood",
      categoryId: "music_original_score",
      entityId: "entity_movie_one_battle_after_another",
      display: {
        primary: "One Battle after Another",
        secondary: "Jonny Greenwood",
      },
    },
    {
      id: "nom_music_original_score_sinners_ludwig_goransson",
      categoryId: "music_original_score",
      entityId: "entity_movie_sinners",
      display: { primary: "Sinners", secondary: "Ludwig Goransson" },
    },

    // Music (Original Song)
    {
      id: "nom_music_original_song_dear_me_diane_warren_relentless",
      categoryId: "music_original_song",
      entityId: "entity_song_dear_me",
      display: {
        primary: "Dear Me",
        secondary: "from Diane Warren: Relentless — Diane Warren",
      },
    },
    {
      id: "nom_music_original_song_golden_kpop_demon_hunters",
      categoryId: "music_original_song",
      entityId: "entity_song_golden",
      display: {
        primary: "Golden",
        secondary:
          "from KPop Demon Hunters — EJAE, Mark Sonnenblick, Joong Gyu Kwak, Yu Han Lee, Hee Dong Nam, Jeong Hoon Seo and Teddy Park",
      },
    },
    {
      id: "nom_music_original_song_i_lied_to_you_sinners",
      categoryId: "music_original_song",
      entityId: "entity_song_i_lied_to_you",
      display: {
        primary: "I Lied To You",
        secondary: "from Sinners — Raphael Saadiq and Ludwig Goransson",
      },
    },
    {
      id: "nom_music_original_song_sweet_dreams_of_joy_viva_verdi",
      categoryId: "music_original_song",
      entityId: "entity_song_sweet_dreams_of_joy",
      display: {
        primary: "Sweet Dreams Of Joy",
        secondary: "from Viva Verdi! — Nicholas Pike",
      },
    },
    {
      id: "nom_music_original_song_train_dreams_train_dreams",
      categoryId: "music_original_song",
      entityId: "entity_song_train_dreams",
      display: {
        primary: "Train Dreams",
        secondary:
          "from Train Dreams — Music: Nick Cave & Bryce Dessner; Lyric: Nick Cave",
      },
    },

    // Best Picture (secondary = producers line)
    {
      id: "nom_best_picture_bugonia",
      categoryId: "best_picture",
      entityId: "entity_movie_bugonia",
      display: {
        primary: "Bugonia",
        secondary:
          "Ed Guiney & Andrew Lowe, Yorgos Lanthimos, Emma Stone and Lars Knudsen, Producers",
      },
    },
    {
      id: "nom_best_picture_f1",
      categoryId: "best_picture",
      entityId: "entity_movie_f1",
      display: {
        primary: "F1",
        secondary:
          "Chad Oman, Brad Pitt, Dede Gardner, Jeremy Kleiner, Joseph Kosinski and Jerry Bruckheimer, Producers",
      },
    },
    {
      id: "nom_best_picture_frankenstein",
      categoryId: "best_picture",
      entityId: "entity_movie_frankenstein",
      display: {
        primary: "Frankenstein",
        secondary:
          "Guillermo del Toro, J. Miles Dale and Scott Stuber, Producers",
      },
    },
    {
      id: "nom_best_picture_hamnet",
      categoryId: "best_picture",
      entityId: "entity_movie_hamnet",
      display: {
        primary: "Hamnet",
        secondary:
          "Liza Marshall, Pippa Harris, Nicolas Gonda, Steven Spielberg and Sam Mendes, Producers",
      },
    },
    {
      id: "nom_best_picture_marty_supreme",
      categoryId: "best_picture",
      entityId: "entity_movie_marty_supreme",
      display: {
        primary: "Marty Supreme",
        secondary:
          "Eli Bush, Ronald Bronstein, Josh Safdie, Anthony Katagas and Timothée Chalamet, Producers",
      },
    },
    {
      id: "nom_best_picture_one_battle_after_another",
      categoryId: "best_picture",
      entityId: "entity_movie_one_battle_after_another",
      display: {
        primary: "One Battle after Another",
        secondary:
          "Adam Somner, Sara Murphy and Paul Thomas Anderson, Producers",
      },
    },
    {
      id: "nom_best_picture_the_secret_agent",
      categoryId: "best_picture",
      entityId: "entity_movie_the_secret_agent",
      display: {
        primary: "The Secret Agent",
        secondary: "Emilie Lesclaux, Producer",
      },
    },
    {
      id: "nom_best_picture_sentimental_value",
      categoryId: "best_picture",
      entityId: "entity_movie_sentimental_value",
      display: {
        primary: "Sentimental Value",
        secondary: "Maria Ekerhovd and Andrea Berentsen Ottmar, Producers",
      },
    },
    {
      id: "nom_best_picture_sinners",
      categoryId: "best_picture",
      entityId: "entity_movie_sinners",
      display: {
        primary: "Sinners",
        secondary: "Zinzi Coogler, Sev Ohanian and Ryan Coogler, Producers",
      },
    },
    {
      id: "nom_best_picture_train_dreams",
      categoryId: "best_picture",
      entityId: "entity_movie_train_dreams",
      display: {
        primary: "Train Dreams",
        secondary:
          "Marissa McMahon, Teddy Schwarzman, Will Janowitz, Ashley Schlaifer and Michael Heimler, Producers",
      },
    },

    // Production Design
    {
      id: "nom_production_design_frankenstein_tamara_deverell_shane_vieau",
      categoryId: "production_design",
      entityId: "entity_movie_frankenstein",
      display: {
        primary: "Frankenstein",
        secondary:
          "Production Design: Tamara Deverell; Set Decoration: Shane Vieau",
      },
    },
    {
      id: "nom_production_design_hamnet_fiona_crombie_alice_felton",
      categoryId: "production_design",
      entityId: "entity_movie_hamnet",
      display: {
        primary: "Hamnet",
        secondary:
          "Production Design: Fiona Crombie; Set Decoration: Alice Felton",
      },
    },
    {
      id: "nom_production_design_marty_supreme_jack_fisk_adam_willis",
      categoryId: "production_design",
      entityId: "entity_movie_marty_supreme",
      display: {
        primary: "Marty Supreme",
        secondary: "Production Design: Jack Fisk; Set Decoration: Adam Willis",
      },
    },
    {
      id: "nom_production_design_one_battle_after_another_florencia_martin_anthony_carlino",
      categoryId: "production_design",
      entityId: "entity_movie_one_battle_after_another",
      display: {
        primary: "One Battle after Another",
        secondary:
          "Production Design: Florencia Martin; Set Decoration: Anthony Carlino",
      },
    },
    {
      id: "nom_production_design_sinners_hannah_beachler_monique_champagne",
      categoryId: "production_design",
      entityId: "entity_movie_sinners",
      display: {
        primary: "Sinners",
        secondary:
          "Production Design: Hannah Beachler; Set Decoration: Monique Champagne",
      },
    },

    // Sound
    {
      id: "nom_sound_f1_gareth_john_al_nelson_gwendolyn_yates_whittle_gary_a_rizzo_juan_peralta",
      categoryId: "sound",
      entityId: "entity_movie_f1",
      display: {
        primary: "F1",
        secondary:
          "Gareth John, Al Nelson, Gwendolyn Yates Whittle, Gary A. Rizzo and Juan Peralta",
      },
    },
    {
      id: "nom_sound_frankenstein_greg_chapman_nathan_robitaille_nelson_ferreira_christian_cooke_brad_zoern",
      categoryId: "sound",
      entityId: "entity_movie_frankenstein",
      display: {
        primary: "Frankenstein",
        secondary:
          "Greg Chapman, Nathan Robitaille, Nelson Ferreira, Christian Cooke and Brad Zoern",
      },
    },
    {
      id: "nom_sound_one_battle_after_another_jose_antonio_garcia_christopher_scarabosio_tony_villaflor",
      categoryId: "sound",
      entityId: "entity_movie_one_battle_after_another",
      display: {
        primary: "One Battle after Another",
        secondary:
          "José Antonio García, Christopher Scarabosio and Tony Villaflor",
      },
    },
    {
      id: "nom_sound_sinners_chris_welcker_benjamin_a_burtt_felipe_pacheco_brandon_proctor_steve_boeddeker",
      categoryId: "sound",
      entityId: "entity_movie_sinners",
      display: {
        primary: "Sinners",
        secondary:
          "Chris Welcker, Benjamin A. Burtt, Felipe Pacheco, Brandon Proctor and Steve Boeddeker",
      },
    },
    {
      id: "nom_sound_sirat_amanda_villavieja_laia_casanovas_yasmina_praderas",
      categoryId: "sound",
      entityId: "entity_movie_sirat",
      display: {
        primary: "Sirāt",
        secondary: "Amanda Villavieja, Laia Casanovas and Yasmina Praderas",
      },
    },

    // Visual Effects
    {
      id: "nom_visual_effects_avatar_fire_and_ash_joe_letteri_richard_baneham_eric_saindon_daniel_barrett",
      categoryId: "visual_effects",
      entityId: "entity_movie_avatar_fire_and_ash",
      display: {
        primary: "Avatar: Fire and Ash",
        secondary:
          "Joe Letteri, Richard Baneham, Eric Saindon and Daniel Barrett",
      },
    },
    {
      id: "nom_visual_effects_f1_ryan_tudhope_nicolas_chevallier_robert_harrington_keith_dawson",
      categoryId: "visual_effects",
      entityId: "entity_movie_f1",
      display: {
        primary: "F1",
        secondary:
          "Ryan Tudhope, Nicolas Chevallier, Robert Harrington and Keith Dawson",
      },
    },
    {
      id: "nom_visual_effects_jurassic_world_rebirth_david_vickery_stephen_aplin_charmaine_chan_neil_corbould",
      categoryId: "visual_effects",
      entityId: "entity_movie_jurassic_world_rebirth",
      display: {
        primary: "Jurassic World Rebirth",
        secondary:
          "David Vickery, Stephen Aplin, Charmaine Chan and Neil Corbould",
      },
    },
    {
      id: "nom_visual_effects_the_lost_bus_charlie_noble_david_zaretti_russell_bowen_brandon_k_mclaughlin",
      categoryId: "visual_effects",
      entityId: "entity_movie_the_lost_bus",
      display: {
        primary: "The Lost Bus",
        secondary:
          "Charlie Noble, David Zaretti, Russell Bowen and Brandon K. McLaughlin",
      },
    },
    {
      id: "nom_visual_effects_sinners_michael_ralla_espen_nordahl_guido_wolter_donnie_dean",
      categoryId: "visual_effects",
      entityId: "entity_movie_sinners",
      display: {
        primary: "Sinners",
        secondary: "Michael Ralla, Espen Nordahl, Guido Wolter and Donnie Dean",
      },
    },

    // Writing (Adapted Screenplay)
    {
      id: "nom_writing_adapted_screenplay_bugonia_will_tracy",
      categoryId: "writing_adapted_screenplay",
      entityId: "entity_movie_bugonia",
      display: { primary: "Bugonia", secondary: "Screenplay by Will Tracy" },
    },
    {
      id: "nom_writing_adapted_screenplay_frankenstein_guillermo_del_toro",
      categoryId: "writing_adapted_screenplay",
      entityId: "entity_movie_frankenstein",
      display: {
        primary: "Frankenstein",
        secondary: "Written for the Screen by Guillermo del Toro",
      },
    },
    {
      id: "nom_writing_adapted_screenplay_hamnet_chloe_zhao_maggie_ofarrell",
      categoryId: "writing_adapted_screenplay",
      entityId: "entity_movie_hamnet",
      display: {
        primary: "Hamnet",
        secondary: "Screenplay by Chloé Zhao & Maggie O'Farrell",
      },
    },
    {
      id: "nom_writing_adapted_screenplay_one_battle_after_another_paul_thomas_anderson",
      categoryId: "writing_adapted_screenplay",
      entityId: "entity_movie_one_battle_after_another",
      display: {
        primary: "One Battle after Another",
        secondary: "Written by Paul Thomas Anderson",
      },
    },
    {
      id: "nom_writing_adapted_screenplay_train_dreams_clint_bentley_greg_kwedar",
      categoryId: "writing_adapted_screenplay",
      entityId: "entity_movie_train_dreams",
      display: {
        primary: "Train Dreams",
        secondary: "Screenplay by Clint Bentley & Greg Kwedar",
      },
    },

    // Writing (Original Screenplay)
    {
      id: "nom_writing_original_screenplay_blue_moon_robert_kaplow",
      categoryId: "writing_original_screenplay",
      entityId: "entity_movie_blue_moon",
      display: { primary: "Blue Moon", secondary: "Written by Robert Kaplow" },
    },
    {
      id: "nom_writing_original_screenplay_it_was_just_an_accident_jafar_panahi_collaborators",
      categoryId: "writing_original_screenplay",
      entityId: "entity_movie_it_was_just_an_accident",
      display: {
        primary: "It Was Just an Accident",
        secondary:
          "Written by Jafar Panahi; Script collaborators — Nader Saïvar, Shadmehr Rastin, Mehdi Mahmoudian",
      },
    },
    {
      id: "nom_writing_original_screenplay_marty_supreme_ronald_bronstein_josh_safdie",
      categoryId: "writing_original_screenplay",
      entityId: "entity_movie_marty_supreme",
      display: {
        primary: "Marty Supreme",
        secondary: "Written by Ronald Bronstein & Josh Safdie",
      },
    },
    {
      id: "nom_writing_original_screenplay_sentimental_value_eskil_vogt_joachim_trier",
      categoryId: "writing_original_screenplay",
      entityId: "entity_movie_sentimental_value",
      display: {
        primary: "Sentimental Value",
        secondary: "Written by Eskil Vogt, Joachim Trier",
      },
    },
    {
      id: "nom_writing_original_screenplay_sinners_ryan_coogler",
      categoryId: "writing_original_screenplay",
      entityId: "entity_movie_sinners",
      display: { primary: "Sinners", secondary: "Written by Ryan Coogler" },
    },
  ],
};

export default oscars2026;
