import { NavBar } from './stories/Navigation/NavBar';
import { BlogPost } from './stories/BlogPost';

/*
 * YPGG page for website
 */
function YPGG() {
  return (
    <div className="YPGG" style={{display: "grid", gridTemplateRows: "20px", justifyContent: "center"}}>
      <title>YPGG</title>
	  <NavBar 
        pages={["Home", "A Young Person's Guide to the Galaxy", "About"]}
        pagePaths={["../", ".", "../about"]}
        currentPage={1}
      />
			<BlogPost 
				postedDate={"08/30/2023"}
				title={"Test"}
			>
				<p style={{fontFamily: "monospace", fontSize: 18}}>
					Paragraphs are the building blocks of papers. 
					Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, 
					a paragraph is half a page long, etc. In reality, though, 
					the unity and coherence of ideas among sentences is what constitutes a paragraph. 
					<br/>
					<br/>
					A paragraph is defined as “a group of sentences or a single sentence that forms a unit”. 
					Length and appearance do not determine whether a section in a paper is a paragraph. 
					For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. 
					Ultimately, a paragraph is a sentence or group of sentences that support one main idea. 
					In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
				</p>
			</BlogPost>
			<BlogPost 
				postedDate={"08/30/2023"}
				title={"Test"}
			>
				<p style={{fontFamily: "monospace", fontSize: 18}}>
					Paragraphs are the building blocks of papers. 
					Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, 
					a paragraph is half a page long, etc. In reality, though, 
					the unity and coherence of ideas among sentences is what constitutes a paragraph. 
					<br/>
					<br/>
					A paragraph is defined as “a group of sentences or a single sentence that forms a unit”. 
					Length and appearance do not determine whether a section in a paper is a paragraph. 
					For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. 
					Ultimately, a paragraph is a sentence or group of sentences that support one main idea. 
					In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
					<br/>
					Paragraphs are the building blocks of papers. 
					Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, 
					a paragraph is half a page long, etc. In reality, though, 
					the unity and coherence of ideas among sentences is what constitutes a paragraph. 
					<br/>
					<br/>
					A paragraph is defined as “a group of sentences or a single sentence that forms a unit”. 
					Length and appearance do not determine whether a section in a paper is a paragraph. 
					For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. 
					Ultimately, a paragraph is a sentence or group of sentences that support one main idea. 
					In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
					<br/>
					Paragraphs are the building blocks of papers. 
					Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, 
					a paragraph is half a page long, etc. In reality, though, 
					the unity and coherence of ideas among sentences is what constitutes a paragraph. 
					<br/>
					<br/>
					A paragraph is defined as “a group of sentences or a single sentence that forms a unit”. 
					Length and appearance do not determine whether a section in a paper is a paragraph. 
					For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. 
					Ultimately, a paragraph is a sentence or group of sentences that support one main idea. 
					In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
				</p>
			</BlogPost>
			<BlogPost 
				postedDate={"08/30/2023"}
				title={"Test"}
			>
				<p style={{fontFamily: "monospace", fontSize: 18}}>
					Paragraphs are the building blocks of papers. 
					Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, 
					a paragraph is half a page long, etc. In reality, though, 
					the unity and coherence of ideas among sentences is what constitutes a paragraph. 
					<br/>
					<br/>
					A paragraph is defined as “a group of sentences or a single sentence that forms a unit”. 
					Length and appearance do not determine whether a section in a paper is a paragraph. 
					For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. 
					Ultimately, a paragraph is a sentence or group of sentences that support one main idea. 
					In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
				</p>
			</BlogPost>
    </div>
  );
}

export default YPGG;
