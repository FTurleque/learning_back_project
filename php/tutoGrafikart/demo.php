<?php
$classe = [
    [
        'nom' => 'Doe',
        'prenom' => 'Marc',
        'notes' => [10, 20, 15]
    ],
    [
        'nom' => 'Doe',
        'prenom' => 'Jane',
        'notes' => [13, 15, 17]
    ]
];
echo $classe[1]['notes'][1];

?>

<?php
// $eleve = [
//     'nom' => 'Doe',
//     'prenom' => 'Marc',
//     'notes' => [10, 20, 15]
// ];
// $eleve['prenom'] = 'Jean';
// $eleve['notes'][] = 16;
// print_r($eleve['notes']);

// Tableau
// $note = [10, 20];
// echo $note[1];

// echo $eleve['prenom'] . ' ' . $eleve['nom'];

// $eleve['prenom'] = 'Jean';
// echo $eleve['prenom'] . ' ' . $eleve['nom'];

// $nom = 'Doe';
// $prenom = 'Marc';
// echo "$nom\n$prenom";

// echo $prenom . ' ' . $nom;

// $nb1 = 1;
// $nb2 = 15;
// echo ($nb1 + $nb2) /2;

// type de variable
// $bool = false;
// $var = null;

// $prenom = 'Marc';
// $nom = 'Doe';
// $note1 = 10;
// $note2 = 20;
// $moyenne = ($note1 + $note2) / 2;

// echo 'Bonjour ' . $prenom . ' ' . $nom . ' vous avez eu ' . (($note1 + $note2) / 2) . ' de moyenne';
// echo "\nBonjour $prenom $nom vous avez eu $moyenne de moyenne !";
?>