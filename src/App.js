import React, { useState } from 'react'
import './App.css'
import { useSpring, animated as a } from 'react-spring'

let spanish = '1	como	as 2	I	I 3	su	his 4	que	that 5	él	he 6	era	was 7	para	for 8	en	on 9	son	are 10	con	with 11	ellos	they 12	ser	be 13	en	at 14	uno	one 15	tener	have 16	este	this 17	desde	from 18	por	by 19	caliente	hot 20	palabra	word 21	pero	but 22	qué	what 23	algunos	some 24	es	is 25	lo	it 26	usted	you 27	o	or 28	tenido	had 29	la	the 30	de	of 31	a	to 32	y	and 33	un	a 34	en	in 35	nos	we 36	lata	can 37	fuera	out 38	otros	other 39	eran	were 40	que	which 41	hacer	do 42	su	their 43	tiempo	time 44	si	if 45	lo hará	will 46	cómo	how 47	dicho	said 48	un	an 49	cada	each 50	decir	tell 51	hace	does 52	conjunto	set 53	tres	three 54	querer	want 55	aire	air 56	así	well 57	también	also 58	jugar	play 59	pequeño	small 60	fin	end 61	poner	put 62	casa	home 63	leer	read 64	mano	hand 65	puerto	port 66	grande	large 67	deletrear	spell 68	añadir	add 69	incluso	even 70	tierra	land 71	aquí	here 72	debe	must 73	grande	big 74	alto	high 75	tal	such 76	siga	follow 77	acto	act 78	por qué	why 79	preguntar	ask 80	hombres	men 81	cambio	change 82	se fue	went 83	luz	light 84	tipo	kind 85	fuera	off 86	necesitará	need 87	casa	house 88	imagen	picture 89	tratar	try 90	nosotros	us 91	de nuevo	again 92	animal	animal 93	punto	point 94	madre	mother 95	mundo	world 96	cerca	near 97	construir	build 98	auto	self 99	tierra	earth 100	padre	father 101	cualquier	any 102	nuevo	new 103	trabajo	work 104	parte	part 105	tomar	take 106	conseguir	get 107	lugar	place 108	hecho	made 109	vivir	live 110	donde	where 111	después	after 112	espalda	back 113	poco	little 114	sólo	only 115	ronda	round 116	hombre	man 117	años	year 118	vino	came 119	show	show 120	cada	every 121	buena	good 122	me	me 123	dar	give 124	nuestro	our 125	bajo	under 126	nombre	name 127	muy	very 128	a través de	through 129	sólo	just 130	forma	form 131	frase	sentence 132	gran	great 133	pensar	think 134	decir	say 135	ayudar	help 136	bajo	low 137	línea	line 138	ser distinto	differ 139	a su vez,	turn 140	causa	cause 141	mucho	much 142	significará	mean 143	antes	before 144	movimiento	move 145	derecho	right 146	niño	boy 147	viejo	old 148	demasiado	too 149	misma	same 150	ella	she 151	todo	all 152	hay	there 153	cuando	when 154	hasta	up 155	uso	use 156	su	your 157	camino	way 158	acerca	about 159	muchos	many 160	entonces	then 161	ellos	them 162	escribir	write 163	haría	would 164	como	like 165	así	so 166	éstos	these 167	su	her 168	largo	long 169	hacer	make 170	cosa	thing 171	ver	see 172	él	him 173	dos	two 174	tiene	has 175	buscar	look 176	más	more 177	día	day 178	podía	could 179	ir	go 180	venir	come 181	hizo	did 182	número	number 183	sonar	sound 184	no	no 185	más	most 186	personas	people 187	mi	my 188	sobre	over 189	saber	know 190	agua	water 191	que	than 192	llamada	call 193	primero	first 194	que	who 195	puede	may 196	abajo	down 197	lado	side 198	estado	been 199	ahora	now 200	encontrar	find 201	cabeza	head 202	de pie	stand 203	propio	own 204	página	page 205	debería	should 206	país	country 207	encontrado	found 208	respuesta	answer 209	escuela	school 210	crecer	grow 211	estudio	study 212	todavía	still 213	aprender	learn 214	planta	plant 215	cubierta	cover 216	alimentos	food 217	sol	sun 218	cuatro	four 219	entre	between 220	estado	state 221	mantener	keep 222	ojo	eye 223	nunca	never 224	último	last 225	dejar	let 226	pensado	thought 227	ciudad	city 228	árbol	tree 229	cruzar	cross 230	granja	farm 231	duro	hard 232	inicio	start 233	podría	might 234	historia	story 235	sierra	saw 236	ahora	far 237	mar	sea 238	dibujar	draw 239	izquierda	left 240	tarde	late 241	ejecutar	run 242	no	don’t 243	mientras	while 244	prensa	press 245	Cerrar	close 246	noche	night 247	reales	real 248	vida	life 249	pocos	few 250	norte	north 251	libro	book 252	llevar	carry 253	tomó	took 254	ciencia	science 255	comer	eat 256	habitación	room 257	amigo	friend 258	comenzó	began 259	gusta	idea 260	peces	fish 261	montaña	mountain 262	Deténgase	stop 263	una vez	once 264	base de	base 265	escuchar	hear 266	caballo	horse 267	cortada	cut 268	seguro	sure 269	ver	watch 270	colores	color 271	cara	face 272	madera	wood 273	principal	main 274	abierta	open 275	parecer	seem 276	juntos	together 277	próximo	next 278	blanco	white 279	niños	children 280	comenzar	begin 281	conseguido	got 282	caminar	walk 283	ejemplo	example 284	aliviar	ease 285	papel	paper 286	grupo	group 287	siempre	always 288	música	music 289	los	those 290	ambos	both 291	marca	mark 292	menudo	often 293	carta	letter 294	hasta	until 295	milla	mile 296	río	river 297	coche	car 298	pies	feet 299	cuidado	care 300	segundo	second 301	suficiente	enough 302	llano	plain 303	chica	girl 304	habitual	usual 305	joven	young 306	listo	ready 307	por encima de	above 308	nunca	ever 309	rojo	red 310	lista	list 311	aunque	though 312	sentir	feel 313	charla	talk 314	pájaro	bird 315	pronto	soon 316	cuerpo	body 317	perro	dog 318	familia	family 319	directa	direct 320	plantear	pose 321	dejar	leave 322	canción	song 323	medir	measure 324	puerta	door 325	producto	product 326	negro	black 327	corto	short 328	numeral	numeral 329	clase	class 330	viento	wind 331	pregunta	question 332	suceder	happen 333	completo	complete 334	buque	ship 335	zona	area 336	medio	half 337	roca	rock 338	orden	order 339	fuego	fire 340	sur	south 341	problema	problem 342	pieza	piece 343	dicho	told 344	sabía	knew 345	pasar	pass 346	desde	since 347	cima	top 348	todo	whole 349	rey	king 350	calle	street 351	pulgadas	inch 352	multiplicar	multiply 353	nada	nothing 354	curso	course 355	quedarse	stay 356	rueda	wheel 357	completo	full 358	fuerza	force 359	azul	blue 360	objeto	object 361	decidir	decide 362	superficie	surface 363	profunda	deep 364	luna	moon 365	isla	island 366	pie	foot 367	sistema	system 368	ocupado	busy 369	prueba	test 370	registro	record 371	barco	boat 372	común	common 373	oro	gold 374	posible	possible 375	plano	plane 376	lugar	stead 377	seco	dry 378	maravilla	wonder 379	risa	laugh 380	mil	thousand 381	hace	ago 382	corrió	ran 383	comprobar	check 384	juego	game 385	forma	shape 386	equiparar	equate 387	caliente	hot 388	señorita	miss 389	traído	brought 390	calor	heat 391	nieve	snow 392	neumáticos	tire 393	traer	bring 394	sí	yes 395	distante	distant 396	llenar	fill 397	al este	east 398	pintar	paint 399	idioma	language 400	entre	among 401	unidad	unit 402	potencia	power 403	ciudad	town 404	fina	fine 405	cierto	certain 406	volar	fly 407	caer	fall 408	conducir	lead 409	grito	cry 410	oscuro	dark 411	máquina	machine 412	nota	note 413	espere	wait 415	figura	figure 416	estrella	star 417	caja	box 418	sustantivo	noun 419	campo	field 420	resto	rest 421	correcta	correct 422	capaz	able 423	libra	pound 424	hecho	done 425	belleza	beauty 426	unidad	drive 427	destacado	stood 428	contener	contain 429	delante	front 430	enseñar	teach 431	semana	week 432	último	final 433	dio	gave 434	verde	green 435	oh	oh 436	rápido	quick 437	desarrollar	develop 438	océano	ocean 439	caliente	warm 440	libre	free 441	minuto	minute 442	fuerte	strong 443	especial	special 444	mente	mind 445	detrás	behind 446	claro	clear 447	cola	tail 448	Produce	produce 449	hecho	fact 450	espacio	space 451	oído	heard 452	mejor	best 453	horas	hour 454	mejor	better 455	verdadero	true 456	durante	during 457	cien	hundred 458	cinco	five 459	recordar	remember 460	paso	step 461	temprana	early 462	mantenga	hold 463	oeste	west 464	suelo	ground 465	interés	interest 466	llegar	reach 467	rápido	fast 468	verbo	verb 469	cantar	sing 470	escuchar	listen 471	seis	six 472	mesa	table 473	viajes	travel 474	menos	less 475	mañana	morning 476	diez	ten 477	sencilla	simple 478	varios	several 479	vocal	vowel 480	hacia	toward 481	guerra	war 482	sentar	lay 483	contra	against 484	patrón	pattern 485	lenta	slow 486	centro	center 487	amar	love 488	persona	person 489	dinero	money 490	servir	serve 491	aparecerá	appear 492	carretera	road 493	mapa	map 494	lluvia	rain 495	regla	rule 496	gobernar	govern 497	Halar	pull 498	frío	cold 499	aviso	notice 500		hunt 503	probable	probable 504	cama	bed 505	hermano	brother 506	huevo	egg 507	paseo	ride 508	celular	cell 509	creer	believe 510	quizás	perhaps 511	recoger	pick 512	repentina	sudden 513	contar	count 514	plaza	square 515	razón	reason 516	longitud	length 517	representar	represent 518	arte	art 519	sujeto	subject 520	región	region 521	tamaño	size 522	variar	vary 523	resolver	settle 524	hablar	speak'.split(
  ' '
)

const cleanSpanish = spanish
  .toString()
  .replace(/[0-9]/g, '')
  .replace(/\s+/g, ' ')
  .split(',')

const trimedSpanish = cleanSpanish.map(item => item.trim())

let randomNum = Math.floor(Math.random() * cleanSpanish.length)
let esp = trimedSpanish[randomNum].split(' ')[0]
let eng = trimedSpanish[randomNum].split(' ')[1]

function App() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  return (
    <>
      <div className="topnav">
        <a className="active" href="#">
          Spanish 1000
        </a>
      </div>
      <div onClick={() => set(state => !state)}>
        <a.div
          className="c back card"
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
        >
          <div>
            <h3>Esp</h3>
            <h1>{esp}</h1>
          </div>
        </a.div>
        <a.div
          className="c front card"
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`)
          }}
        >
          <div>
            <h3>En</h3>
            <h1>{eng}</h1>
          </div>
        </a.div>
      </div>
      <div className="footer">
        <p>
          <a href="https://github.com/NikValdez" target="_blank">
            Created by Nik Cochran
          </a>
        </p>
      </div>
    </>
  )
}

export default App
