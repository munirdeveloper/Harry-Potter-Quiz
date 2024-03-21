<script src="logic.js"></script>

<div class="container h-full mx-auto flex justify-center items-center mt-20 md:mt-20">
	<div class="bg-slate-300 p-6 rounded-lg shadow-lg h-full lg:w-5/12">
		<div
			class="card bg-gradient-to-br from-orange-500 via-blue-500 to-indigo-500 varient-gradient-tertiary-primary p-4 mb-4"
		>
			<div class="card-header border-b text-center font-semibold text-lg">
				Pick an animal you would befriend
			</div>
			<div class="card-body ml-5 mt-3 p-3">
				<label class="font-semibold text-base">
					<input type="radio" name="animal" value="Lion" /> Lion
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="animal" value="Snake" /> Snake
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="animal" value="Eagle" /> Eagle
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="animal" value="Badger" /> Badger
				</label>
			</div>
		</div>
		<div
			class="card bg-gradient-to-br from-green-500 via-red-500 to-purple-500 varient-gradient-tertiary-primary p-4 mb-4"
		>
			<div class="card-header border-b text-center font-semibold text-lg">
				If you had magic abilities, would you rather:
			</div>
			<div class="card-body ml-5 mt-3 p-3">
				<label class="font-semibold text-base">
					<input type="radio" name="power" value="help" /> Have healing/herbal powers (helping people)
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="power" value="trick" /> Have illusion powers (trick people)
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="power" value="fight" /> Have brute powers (fighting people)
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="power" value="sports" /> Have physical powers (sports and strength)
				</label>
			</div>
		</div>
		<div
			class="card bg-gradient-to-br from-blue-500 via-pink-500 to-orange-500 varient-gradient-tertiary-primary p-4 mb-4"
		>
			<div class="card-header border-b text-center font-semibold text-lg">
				Pick a color you like the most
			</div>
			<div class="card-body ml-5 mt-3 p-3">
				<label class="font-semibold text-base">
					<input type="radio" name="color" value="green" /> Green
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="color" value="red" /> Red
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="color" value="blue" /> Blue
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="color" value="yellow" /> Yellow
				</label>
			</div>
		</div>
		<div
			class="card bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 varient-gradient-tertiary-primary p-4 mb-4 h-[400px]"
		>
			<div class="card-header border-b text-center font-semibold text-lg">
				Would you befriend Severus Snape or Rubeus Hagrid?
			</div>
			<div class="card-body ml-5 mt-3 p-3">
				<label class="font-semibold text-base">
					<input type="radio" name="SnapeOrHagrid" value="snape" /> Snape
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="SnapeOrHagrid" value="hagrid" /> Hagrid
				</label><br />
			</div>
			<div class="flex w-full">
				<div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
					<img
						src="/snape.gif"
						alt="A GIF of Snape"
						class="rounded-lg border border-white border-2"
					/>
					Severus Snape
				</div>
				<div class="mx-2"></div>
				<!-- This is the added gap -->
				<div class="divider divider-horizontal"></div>
				<div class="mx-2"></div>
				<!-- This is the added gap -->
				<div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
					<img
						src="/hagrid.gif"
						alt="A GIF of Hagrid"
						class="rounded-lg border border-white border-2"
					/>
					Rubeus Hagrid
				</div>
			</div>
		</div>
		<div
			class="card bg-gradient-to-br from-pink-500 via-indigo-500 to-orange-500 varient-gradient-tertiary-primary p-4 mb-4"
		>
			<div class="card-header border-b text-center font-semibold text-lg">
				Which trait do you value most?
			</div>
			<div class="card-body ml-5 mt-3 p-3">
				<label class="font-semibold text-base">
					<input type="radio" name="trait" value="intelligence" /> Intelligence
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="trait" value="courage" /> Courage
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="trait" value="ambition" /> Ambition
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="trait" value="loyalty" /> Loyalty
				</label>
			</div>
		</div>
		<div
			class="card bg-gradient-to-br from-green-500 via-indigo-500 to-red-500 varient-gradient-tertiary-primary p-4 mb-4 h-800px"
		>
			<div class="card-header border-b text-center font-semibold text-lg">
				Which kind of pet would you bring to Hogwarts?
			</div>
			<div class="card-body ml-5 mt-3 p-3">
				<label class="font-semibold text-base">
					<input type="radio" name="pet" value="owl" /> Owl
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="pet" value="cat" /> Cat
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="pet" value="frog" /> Frog
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="pet" value="rat" /> Rat
				</label>
			</div>
		</div>
		<div
			class="card bg-gradient-to-br from-red-500 via-green-500 to-blue-500 varient-gradient-tertiary-primary p-4 mb-4 h-[400px]"
		>
			<div class="card-header border-b text-center font-semibold text-lg">
				Do you side with Dumbledore or Voldemort?
			</div>
			<div class="card-body ml-5 mt-3 p-3">
				<label class="font-semibold text-base">
					<input type="radio" name="hero" value="dumbledore" /> Dumbledore
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="hero" value="voldemort" /> Voldemort
				</label><br />
			</div>
			<div class="flex w-full">
				<div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
					<img
						src="/albus.jpeg"
						alt="A GIF of Snape"
						class="rounded-lg border border-white border-2"
					/>
					Severus Snape
				</div>
				<div class="mx-2"></div>
				<!-- This is the added gap -->
				<div class="divider divider-horizontal"></div>
				<div class="mx-2"></div>
				<!-- This is the added gap -->
				<div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
					<img
						src="/vold.jpg"
						alt="A GIF of Hagrid"
						class="rounded-lg border border-white border-2"
					/>
					Rubeus Hagrid
				</div>
			</div>
		</div>
	</div>
</div>
