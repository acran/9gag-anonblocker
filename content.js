const postSelector = '#list-view-2 article[id^=jsid-post-]';
const anonymousAuthorSelector = '.ui-post-creator__author[href="javascript:void(0);"]';

const anonymousPostClass = '__is-anonymous-post';
const hideAnonymousPostsClass = '__hide-anonymous-posts';

addToggleButton();
attachMutationObservers();

function addToggleButton() {
	const toggleButton = document.createElement('button');
	toggleButton.textContent = 'O';

	toggleButton.addEventListener('click', () => {
		if (document.body.classList.contains(hideAnonymousPostsClass)) {
			document.body.classList.remove(hideAnonymousPostsClass);
			toggleButton.textContent = 'O';
		} else {
			document.body.classList.add(hideAnonymousPostsClass);
			toggleButton.textContent = 'X';
		}
	});

	const toggleContainer = document.createElement('div');
	toggleContainer.classList.add('general-function');
	toggleContainer.append(toggleButton);
	document.querySelector('header .function-wrap')?.prepend(toggleContainer);
}

function attachMutationObservers() {
	const updatePostClasses = post => {
		const anonymousAuthor = post.querySelector(anonymousAuthorSelector);

		if (anonymousAuthor) {
			post.classList.add(anonymousPostClass);
		} else {
			post.classList.remove(anonymousPostClass);
		}
	};

	const postObserver = new MutationObserver(mutations => {
		mutations.forEach(mutation => updatePostClasses(mutation.target));
	});

	const attachPostObserver = post => {
		postObserver.observe(post, {childList: true});
		updatePostClasses(post);
	};

	const newPostsObserver = new MutationObserver(mutations => {
		const addedNodes = mutations.flatMap(mutation => [...mutation.addedNodes]);
		const addedPosts = addedNodes.flatMap(node => {
			if (!node.matches) {
				return [];
			}

			if (node.matches(postSelector)) {
				return node;
			}

			return [...node.querySelectorAll(postSelector)];
		});

		addedPosts.forEach(attachPostObserver);
	});

	newPostsObserver.observe(document.body, {childList: true, subtree: true});
	document.querySelectorAll(postSelector)
		.forEach(attachPostObserver);
}
