<script>
	let user_age = '';
	let user_name = '';
	let user_feedback = '';

	import {
		handleSelection,
		handleSelection2,
		handleSelection3,
		handleSelection4,
		handleSelection5,
		handleSelection6,
		handleSelection7,
		handleSelection8,
		handleFormSubmission,
		validateForm
	} from './logic.js';

	let maxScore = 0;

	function calculateMaxScore() {
		maxScore = getMaxScore();
	}
</script>

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
					<input type="radio" name="animal" value="Lion" on:change={handleSelection} /> Lion
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="animal" value="Snake" on:change={handleSelection} /> Snake
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="animal" value="Eagle" on:change={handleSelection} /> Eagle
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="animal" value="Badger" on:change={handleSelection} /> Badger
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
					<input
						type="radio"
						name="power"
						value="Have healing/herbal powers (helping people)"
						on:change={handleSelection2}
					/> Have healing/herbal powers (helping people)
				</label><br />
				<label class="font-semibold text-base">
					<input
						type="radio"
						name="power"
						value="Have illusion powers (trick people)"
						on:change={handleSelection2}
					/> Have illusion powers (trick people)
				</label><br />
				<label class="font-semibold text-base">
					<input
						type="radio"
						name="power"
						value="Have brute powers (fighting people)"
						on:change={handleSelection2}
					/> Have brute powers (fighting people)
				</label><br />
				<label class="font-semibold text-base">
					<input
						type="radio"
						name="power"
						value="Have physical powers (sports and strength)"
						on:change={handleSelection2}
					/> Have physical powers (sports and strength)
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
					<input type="radio" name="color" value="Green" on:change={handleSelection3} /> Green
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="color" value="Red" on:change={handleSelection3} /> Red
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="color" value="Blue" on:change={handleSelection3} /> Blue
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="color" value="Yellow" on:change={handleSelection3} /> Yellow
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
					<input type="radio" name="SnapeOrHagrid" value="Snape" on:change={handleSelection4} /> Snape
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="SnapeOrHagrid" value="Hagrid" on:change={handleSelection4} /> Hagrid
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
					<input type="radio" name="trait" value="Intelligence" on:change={handleSelection5} /> Intelligence
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="trait" value="Courage" on:change={handleSelection5} /> Courage
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="trait" value="Ambition" on:change={handleSelection5} /> Ambition
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="trait" value="Loyalty" on:change={handleSelection5} /> Loyalty
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
					<input type="radio" name="pet" value="Owl" on:change={handleSelection6} /> Owl
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="pet" value="Cat" on:change={handleSelection6} /> Cat
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="pet" value="Frog" on:change={handleSelection6} /> Frog
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="pet" value="Rat" on:change={handleSelection6} /> Rat
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
					<input type="radio" name="hero" value="Dumbledore" on:change={handleSelection7} /> Dumbledore
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="hero" value="Voldemort" on:change={handleSelection7} /> Voldemort
				</label><br />
			</div>
			<div class="flex w-full">
				<div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
					<img
						src="/albus.jpeg"
						alt="A GIF of Snape"
						class="rounded-lg border border-white border-2"
					/>
					Albus Dumbledore
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
					Voldemort
				</div>
			</div>
		</div>
		<div
			class="card bg-gradient-to-br from-red-500 via-green-500 to-blue-500 varient-gradient-tertiary-primary p-4 mb-4 h-[450px]"
		>
			<div class="card-header border-b text-center font-semibold text-lg">
				In the Goblet of Fire tournament, which wizard challenge was your favorite?
			</div>
			<div class="card-body ml-5 mt-3 p-3">
				<label class="font-semibold text-base">
					<input
						type="radio"
						name="challenge"
						value="The Dragon and the Egg"
						on:change={handleSelection8}
					/> The Dragon and the Egg
				</label><br />
				<label class="font-semibold text-base">
					<input type="radio" name="challenge" value="The Maze" on:change={handleSelection8} /> The Maze
				</label><br />
				<label class="font-semibold text-base">
					<input
						type="radio"
						name="challenge"
						value="The Black Lake"
						on:change={handleSelection8}
					/> The Black Lake
				</label><br />
			</div>
			<div class="flex w-full">
				<div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
					<img
						src="/maze.jpg"
						alt="A GIF of Snape"
						class="rounded-lg border border-white border-2"
					/>
				</div>
				<div class="mx-2"></div>
				<!-- This is the added gap -->
				<div class="divider divider-horizontal"></div>
				<div class="mx-2"></div>
				<!-- This is the added gap -->
				<div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
					<img
						src="/dragon.jpeg"
						alt="A GIF of Hagrid"
						class="rounded-lg border border-white border-2"
					/>
				</div>
			</div>
		</div>
		<div class="card p-4">
			<form method="POST" action="?/submission">
				<label class="label mb-5">
					<span>Enter your name</span>
					<input
						class="input"
						name="user_name"
						id="user_name"
						type="text"
						placeholder="Bob"
						required
					/>
				</label>

				<label class="label mb-5">
					<span>Enter your age</span>
					<input
						class="input"
						name="user_age"
						id="user_age"
						type="number"
						placeholder="25"
						required
					/>
				</label>

				<label class="label">
					<span>Do you like my website? I am open to suggestions/advice</span>
					<textarea
						class="textarea"
						id="user_feedback"
						name="user_feedback"
						rows="4"
						placeholder="I like it! You could improve on .."
					/>
				</label>
				<button
					type="submit"
					class="block card card-hover p-4 mt-5 w-3/6 text-center hover:bg-green-300 mx-auto variant-filled-success"
					on:click={handleFormSubmission}>Submit Quiz</button
				>
			</form>
		</div>
	</div>
</div>
